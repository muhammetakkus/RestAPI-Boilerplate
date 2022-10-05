import { NextFunction, Request, Response } from "express"
import Controller from "./Controller";
import { sequelize, DataTypes } from '../config/db'
import PermissionService from "../services/PermissionService";

// const Permission = require(`${__dirname}/models/permission`)(sequelize, DataTypes)

const permissionService = new PermissionService( {} );

class PermissionController extends Controller {
    constructor( service: PermissionService ) {
        super( service );
    }
    
    async create (req: Request, res: Response, next: NextFunction) {
        const response = await this._create(req, res, next)
        return res.status( 200 ).json( response )
    }

    async getAll (req: Request, res: Response, next: NextFunction) {
        const response = await this._getAll(req, res, next)
        return res.status( 200 ).json( response )
    }

    update (req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
    }

    delete (id: number | string) {
        return `delete permission ID: ${id}`
    }
}

export default new PermissionController( permissionService );