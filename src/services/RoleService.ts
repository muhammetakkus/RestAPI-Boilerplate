import { Role } from '../shared/interfaces/role'
import Service from './Service'

class RoleService extends Service {
    constructor( model: any ) {
        super( model )
        this.model = model
    }
    
    async create( data: Role ) {
        return this.insert(data)
    }

    async getAll(options?: any) {
        try {
            return this.findAll(options)
        } catch (errors) { throw errors; }
    }

    async get( id: number | string ) {
        try { 
            return this.find(id)
        } 
        catch (errors) { throw errors; }
    }
    
    async updateById( id: number | string, data: any ) {
        return this.update(id, data)
    }

    async deleteById( id: number | string ) {
        return this.delete(id)
    }
}

export default RoleService