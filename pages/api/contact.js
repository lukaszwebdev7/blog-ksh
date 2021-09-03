let nodemailer = require('nodemailer');

function validateCaptcha(token) {
	return new Promise((resolve, reject) => {
		const secret_key = process.env.recaptcha_secret;

		const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

		fetch(url, {
			method: 'post'
		})
			.then((response) => response.json())
			.then((google_response) => {
				if (google_response.success == true) {
					resolve(true);
				} else {
					resolve(false);
				}
			})
			.catch((err) => {
				console.log(err);
				resolve(false);
			});
	});
}

export default async function(req, res) {
	require('dotenv').config();

	const token = req.body['captchaToken'];

	if ((await validateCaptcha(token)) === false) {
		return console.log('Coś poszło nie tak!');
	}
	delete req.body['captchaToken'];

	const transporter = nodemailer.createTransport({
		port: 465,
		host: 'node-wp1.kru.pl',
		auth: {
			user: 'spolka@radcapiaseczno.pl',
			pass: process.env.password
		},
		secure: true,
		disableFileAccess: true,
		disableUrlAccess: true
	});

	await new Promise((resolve, reject) => {
		transporter.verify(function(error, success) {
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log('Server is ready to take our messages');
				resolve(success);
			}
		});
	});

	const { name, email, message } = req.body;

	if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
		res.status(422).json({ message: 'Invalid input' });
		return;
	}

	const mailData = {
		from: 'spolka@radcapiaseczno.pl',
		to: 'lukasz.szczepaniak@interia.pl',
		subject: `Wiadomość ze strony apółkaaktywnie.pl od ${name}`,
		text: 'Wiadomość od ' + email + ' o treści: \n' + message
	};

	await new Promise((resolve, reject) => {
		transporter.sendMail(mailData, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});

	res.status(200).json({ status: 'success' });
}
