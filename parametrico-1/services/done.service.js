const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class DoneService {

  constructor(){
  }
  async create(data) {
    const newDone = await models.Done.create(data);
    return newDone;
  }

  async find() {
    const  done = await models.Done.findAll();
    return done;
  }

  async findOne(id) {
    const done = await models.Done.findByPk(id, {

    });
    return  done;
  }

  async update(id, changes) {
    const done=await this.findOne(id);
    const newDone=await done.update(changes);
    return newDone;
  }

  async delete(id) {
    return { id };
  }

}

module.exports = DoneService;
