const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'peter13084081@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ,${name} .`,
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'peter13084081@gmail.com',
        subject: 'time to say goodbye',
        text: `Welcome to the app ,${name} .`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail,
}
