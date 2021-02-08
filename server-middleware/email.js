// Import list.
const bodyParser = require('body-parser')
const app = require('express')()
const sgMail = require('@sendgrid/mail')
const axios = require('axios').default

// Sendgrid setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const recapKey = process.env.RECAPTCHA_API_KEY

app.use(bodyParser.json())
app.post('/contact', async (req, res) => {
  const bodyData = await req.body
  let data
  const captcha = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recapKey}&response=${bodyData.token}`
  )
  if (captcha.data.success) {
    data = {
      from: `Contact Form <contact@extraterrestrialgardener.com>`,
      to: [
        'jkeffects@hotmail.com',
        'jkeffects@yahoo.com',
        'webmaster@extraterrestrialgardener.com',
      ],
      subject: 'XTG Contact Form',
      reply_to: bodyData.email,
      text: `
New message submitted from Extraterrestrial Gardener Contact Form.
Message from ${bodyData.name} <${bodyData.email}>.
Message reads:
${bodyData.message}        
`,
    }
  } else {
    console.error('Captcha Failed')
    res.status(300)
    res.send('Captcha failed!')
    return
  }
  sgMail
    .send(data)
    .then(() => {
      res.send('Email sent!')
    })
    .catch((error) => {
      console.error(error)
      res.status(300)
      res.send(error)
    })
})

module.exports = app
