const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CardCalculationService {

  constructor(){
  }
  async create(data) {
    const newCardCalculation = await models.CardCalculation.create(data);
    return newCardCalculation;
  }

  async find() {
    const  cardCalculation = await models.CardCalculation.findAll();
    return cardCalculation;
  }

  async findOne(id) {
    const cardCalculation = await models.CardCalculation.findByPk(id, {

    });
    return  cardCalculation;
  }

  async update(id, changes) {
    const cardCalculation=await this.findOne(id);
    const newCardCalculation=await cardCalculation.update(changes);
    return newCardCalculation;
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CardCalculationService;
