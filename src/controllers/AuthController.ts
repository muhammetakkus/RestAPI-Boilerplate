import { NextFunction, Request, Response } from "express"
import { sequelize, DataTypes } from '../config/db'
import UserService from "../services/UserService";
import Controller from "./Controller";
const User = require(`../models/user`)(sequelize, DataTypes)

const userService = new UserService( User );

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController extends Controller {
    constructor( service: UserService ) {
        super( service );
    }

    async login (req: Request, res: Response, next: NextFunction) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashedPassword);
    }

    async register (req: Request, res: Response, next: NextFunction) {
        const response = await this._create(req, res, next)
        return res.status( 200 ).json( response )
    }
    
    createToken(){
        console.log("create token")
    }
}

export default new AuthController( userService );