const express = require('express'),
      router = express.Router(),
      nodemailer = require('nodemailer');

module.exports = function () {
    router.get('/',(req,res)=>{
        res.send('hola') 
     })
     router.post('/sendmail',async (req,res)=>{

        const {name,email,mensaje}=req.body
        console.log(name,email,mensaje)
        const emailHtml=`
        <h1>Nuevo mensaje</h1>
        <ul>
        <li><b>Nombre: </b>${name}</li>
        <li><b>Email: </b>${email}</li>
        </ul>
        <p>${mensaje}</p>
        `
        const stmpConfig={
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'juanvs23@gmail.com',
                pass: '5u2n123!'
            }
        }

        //configura el hosting
        let transporter = nodemailer.createTransport(stmpConfig)
        let info =  await transporter.sendMail({
            from: 'Formulario de contacto', // sender address
            to: "juanvs23@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
           
            html: emailHtml, // html body
          });
        res.send('ok!') 
     })
    return router;
}