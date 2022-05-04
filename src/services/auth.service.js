const User = require('../models/user.model')
const ErrorService = require('../services/error.service')
const bcrypt = require('bcrypt')

class AuthService {
  static createUser = async (email, password) => {
    const user = await User.findOne({ where: { email } })

    if (user) {
      throw new ErrorService('Пользовтель с таким email уже существует')
    }

    const hash = await bcrypt.hash(password, 10)
    await User.create({ email, password: hash })
  }

  static loginUser = async () => {}

  static logoutUser = async () => {}
}

module.exports = AuthService
