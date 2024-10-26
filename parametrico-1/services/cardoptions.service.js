const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CardOptionsService {

  constructor(){
  }
  async create(data) {
    const newCardOptions = await models.CardOptions.create(data);
    return newCardOptions;
  }

  async find() {
    const  cardOptions = await models.CardOptions.findAll();
    return cardOptions;
  }

  async findOne(id) {
    const cardOptions = await models.CardOptions.findByPk(id, {

    });
    return  cardOptions;
  }

  async update(id, changes) {
    const cardOption=await this.findOne(id);
    const newCardOptions=await cardOption.update(changes);
    return newCardOptions;
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CardOptionsService;
