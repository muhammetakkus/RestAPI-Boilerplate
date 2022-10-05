import { Router } from "express";

const router = Router()

import permission from "./routes/permission"
import role from "./routes/role"
import user from "./routes/user"
import auth from "./routes/auth"

/*
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3003');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
*/

router.use('/user', user)
router.use('/auth', auth)
router.use('/role', role)
router.use('/permission', permission)

export default router