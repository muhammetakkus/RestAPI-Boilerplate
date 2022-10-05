import express from 'express'
const router = express.Router()

import RoleController from '../controllers/RoleController'

router.route( '/')
        .get(RoleController.getAll.bind(RoleController))
        .post(RoleController.create.bind(RoleController))

router.route( '/:id')
        .put(RoleController.update.bind(RoleController))
        .delete(RoleController.delete.bind(RoleController))

export default router
