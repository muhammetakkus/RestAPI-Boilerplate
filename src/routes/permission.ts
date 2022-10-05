import express from 'express'
const router = express.Router()
import PermissionController from '../controllers/PermissionController'

// router.get( '/', (req: Request, res: Response, next: NextFunction) => PermissionController.getAll(req, res, next));
router.get( '/', PermissionController.getAll.bind(PermissionController));
router.post( '/', PermissionController.create.bind(PermissionController));

export default router

