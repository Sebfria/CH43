const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class ClientService {

  constructor(){
  }
  async create(data) {
    const newClient = await models.Client.create(data);
    return newClient;
  }

  async find() {
    const  client = await models.Client.findAll();
    return client;
  }

  async findOne(id) {
    const client = await models.Client.findByPk(id, {

    });
    return  client;
  }

  async update(id, changes) {
    const client=await this.findOne(id);
    const newClient=await client.update(changes);
    return newClient;
  }

  async delete(id) {
    return { id };
  }

}

module.exports = ClientService;
