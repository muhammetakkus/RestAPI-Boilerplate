import express from 'express'
const router = express.Router()

import AuthController from '../controllers/AuthController'

router.route( '/login').post(AuthController.login.bind(AuthController))
router.route( '/register').post(AuthController.register.bind(AuthController))

export default router
