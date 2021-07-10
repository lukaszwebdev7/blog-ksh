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
			user: 'lukasz_123sz@interia.pl',
			pass: process.env.password
		},
		secure: true
	});

	const mailData = {
		from: 'lukasz_123sz@interia.pl',
		to: 'zen_24@wp.pl',
		subject: `Message From ${req.body.name}`,
		text: req.body.message + ' | Sent from: ' + req.body.email,
		html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
	};

	transporter.sendMail(mailData, function(err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

	res.send('success');
}
