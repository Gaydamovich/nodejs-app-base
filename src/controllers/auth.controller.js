const AuthService = require('../services/auth.service')

class AuthController {
  static registration = async (req, res) => {
    const { email, password } = req.body

    try {
      await AuthService.createUser(email, password)

      res
        .status(201)
        .json({ success: true, message: `Пользователь ${email} успешно зарегестрирован!` })
    } catch (e) {
      res
        .status(400)
        .json({ success: false, message: e.message, code: e.code })
    }
  }

  static login = async (req, res) => {
    try {

    } catch (e) {

    }
  }

  static logout = async (req, res) => {
    try {

    } catch (e) {

    }
  }
}

module.exports = AuthController
