const { Router } = require('express')
const AuthController = require('../controllers/auth.controller')

const router = Router()

router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

module.exports = router
