const { text } = require("body-parser");
const nodemailer =require("nodemailer");



const sendEmail=async(options)=>{
    const transporter=nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,
        secure:true,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        },
        tls:{
            rejectUnauthorized:false
        }
    })
    const mailOpts={
        from:`K-hosose from the khososy website <yousefalkret2@gmail.com>`,
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    await transporter.sendMail(mailOpts);
}

module.exports = {sendEmail};
