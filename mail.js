const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'braj70901@gmail.com', 
        pass: 'vpwm jlsd piai gfjl'  
    }
});

let mailOptions = {
    from: 'braj70901@gmail.com',
    to: 'anshul.kumar_bca22@gla.ac.in',
    subject: 'Anshul | Portfolio', 
    text: 'Hello! this is anshul kumar', 
    html: '<b>Universe Boss Krish Gale</b>'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
