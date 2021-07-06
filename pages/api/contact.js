let nodemailer = require('nodemailer')
    
export default function (req, res) {
  require('dotenv').config()

 
  const transporter = nodemailer.createTransport({
    port: 465,     
    host: "smtp.gmail.com",
       auth: {
            user: 'lukaszkowalsky488@gmail.com',
            pass: process.env.password,
         },
    secure: true,
  });
  
  const mailData = {
      from: 'lukaszkowalsky488@gmail.com',
      to: 'lukasz.webdev7@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
  })

  console.log(req.body)
  res.send('success')
}  