'use strict';

import Sequelize from "../../node_modules/sequelize/types/sequelize";

/**
 * Mysql Base Service
 */

class Service {
  model: any;
  
  /**
   * Base Service Layer
   * @param model
   */
  constructor(model: Sequelize) {
    this.model = model;
  }

  async insert(data: any) {
    try {
      let item = await this.model.create(data);
      if (item) return item
      new Error('Something wrong happened - Serive.js');
    } catch (error) {
      throw error;
    }
  }

  async findAll(options?: any) {
    let { where, populate, sort, page, limit } = options;

    page = page ? Number(page) : 0;
    limit = limit ? Number(limit) : 20;
    sort = sort ? sort : {createdAt: -1};
    where = where ? JSON.parse(where) : {}
    populate = populate ? populate : []

    try {

      let items = await this.model.findAll();
      return items
    } catch (errors) { throw errors; }
  }

  /**
   * 
   * @param {id} id 
   * @param {string | array} populate 
   * @returns array
   */
  async find(id: number | string) {
    try {
      let item = await this.model.findOne({ where:{ id: id } });
      if (item) return item
      let error = new Error('Item not found');
      // error.statusCode = 404;
      throw error;
    } catch (errors) {
     throw errors;
    }
  }

  async where(data: any) {
    try {
      let item = 'daha sonra overwrite'
      if (item) return item
      let error = new Error('Item not found');
      // error.statusCode = 404;
      throw error;
    } catch (errors) {
     throw errors;
    }
  }

  async update(id: number | string, data: any) {
    try {
      let item = await this.model.update(data, { where: { id: id } });
      return item
    } catch (errors) {
      throw errors;
    }
  }

  async delete(id: number | string) {
    try {
      let item = await this.model.destroy({ where:{ id: id } });

      if (!item) {
        let error = new Error('Item not found');
        // error.statusCode = 404;
        throw error;
      } else {
        return [item, {deleted: true}];
      }
    } catch (errors) {
      throw errors;
    }
  }
}

export default Service