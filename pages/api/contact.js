let nodemailer = require('nodemailer');

export default function(req, res) {
	require('dotenv').config();

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

	console.log(req.body);
	res.send('success');
}
