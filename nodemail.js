
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,

        auth: {
            user: 'beliv58@mail.ru',
            pass: '730318800t'
        }
    },
    {
        from: 'Ирина Владимировна <beliv58@mail.ru>'
        // from: '<smolin.mailer@mail.ru>'
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        // console.log('Email sent: ', info)
    })
}

module.exports = mailer