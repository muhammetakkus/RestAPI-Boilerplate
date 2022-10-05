import { NextFunction, Request, Response } from "express"
import Controller from "./Controller";
import { sequelize, DataTypes } from '../config/db'
import RoleService from "../services/RoleService";

const Role = require(`../models/role`)(sequelize, DataTypes)


const roleService = new RoleService( Role );

class RoleController extends Controller {
    constructor( service: RoleService ) {
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

    async update (req: Request, res: Response, next: NextFunction) {
        const response = await this._update(req, res, next)
        return res.status( 200 ).json( response )
    }

    async delete (id: number | string) {
        return `delete permission ID: ${id}`
    }
}

export default new RoleController( roleService ); // bu sayede routerdan create'i kullanarak buraya geçilen servisi kullanmış oluyor