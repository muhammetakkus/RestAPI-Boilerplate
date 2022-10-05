import express from 'express'
const router = express.Router()

import UserController from '../controllers/UserController'

router.route( '/')
        .get(UserController.getAll.bind(UserController))
        .post(UserController.create.bind(UserController))

router.route( '/:id')
        .put(UserController.update.bind(UserController))
        .delete(UserController.delete.bind(UserController))

export default router
