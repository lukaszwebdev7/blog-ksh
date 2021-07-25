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

	console.log(req.body);

	const transporter = nodemailer.createTransport({
		port: 465,
		host: 'poczta.interia.pl',
		auth: {
			user: 'jan.kowalski_122@interia.pl',
			pass: process.env.password
		},
		secure: true
	});

	const { name, email, message } = req.body;

	if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
		res.status(422).json({ message: 'Invalid input' });
		return;
	}

	const mailData = {
		from: 'jan.kowalski_122@interia.pl',
		to: 'zen_24@wp.pl',
		subject: `Wiadomość od ${name}`,
		text: 'Wiadomość od ' + email + ' o treści: \n' + message
	};

	transporter.sendMail(mailData, function(err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

	res.send('success');
}
