
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

const profile = require('./server/services/profile/router/router')

app.use('/profile', profile)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})