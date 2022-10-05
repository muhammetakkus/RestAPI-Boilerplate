import { Request, Response, NextFunction } from "express"

class Controller {
  service: any;

  /**
   * Base Controller Layer
   * @param service
   */
  constructor(service: any) {
    this.service = service;
  }

  async _create(req: Request, res: Response, next: NextFunction) {
    try {
        return await this.service.create( req.body );
    } catch ( e ) {
      next( e );
      return e;
    }
  }

  async _getAll(req: Request, res: Response, next: NextFunction) { 
    try {
      return await this.service.getAll();
    }
    catch (e) {
      next( e );
      return e;
    }
  }

  async _get(req: Request, res: Response, next: NextFunction, populate: any) { 
    const { id } = req.params;
    try {
      return await this.service.get(id, populate);
    }
    catch (e) {
      next( e );
      return e;
    }
  }

  async _update(req: Request, res: Response, next: NextFunction) { 
    const { id } = req.params;
    try {
      return await this.service.updateById(id, req.body);
    }
    catch (e) {
      next( e );
      return e;
    }
  }

  async _delete(req: Request, res: Response, next: NextFunction) { 
    const { id } = req.params;
    try {
      return await this.service.deleteById(id);
    }
    catch (e) {
      next( e );
      return e;
    }
  }

}

export default Controller
