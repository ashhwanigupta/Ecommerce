const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");


const sendEmail = asyncHandler(async(data,req,res)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: process.env.GMAIL_ID,
          pass: process.env.MAIL_PASS,
        },
      });
     
        let info = await transporter.sendMail({
          from: '"Ashwani 👻" <Ashhwanigupta1@gmail.com>', 
          to: data.to,
          subject: data.subject, 
          text: data.text, 
          html: data.htm, 
        });
      
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL :%s", nodemailer.getTestMessageUrl(info));

})

module.exports = sendEmail;