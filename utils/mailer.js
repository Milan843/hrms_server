var nodemailer = require('nodemailer');

module.exports = function (email,verify){
console.log(email,verify);

var transporter = nodemailer.createTransport({
//   service: 'gmail',
host:"mail.vinove.com" ,
secure:false,
  port:587,
  auth: {
    user: 'milan.srivastava@mail.vinove.com',
    pass: 'milan@2019'
  },
  tls:{
      rejectUnauthorized:false
  }
});
const message1=`You requested for a password reset, kindly use this ${verify} to reset your password`


var mailOptions = {
  from: 'milan.srivastava@mail.vinove.com',
  to:email,
  subject: 'Sending Email using Node.js',
  text:`Please click this link ${verify} to approve your login  `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
}