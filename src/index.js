const express = require('express')
require('dotenv').config()
const authRouter = require('./routes/auth.router')
const sequelize = require('./db')
const User = require('./models/user.model')
const { getPrimaryText, getErrorText } = require('./utils')

const app = express()

const PORT = process.env.PORT || 8800

app.use(express.json())

// Auth api
app.use('/user', authRouter)

// for test api
app.get('/users', async (req, res) => {
  const users = await User.findAll()
  res.json({ success: true, users })
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => (
      console.log(getPrimaryText(`Server has been started on port: ${PORT}`))
    ))
  } catch (e) {
    console.log(getErrorText(e.message))
  }
}

start()
