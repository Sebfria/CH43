const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CapacityBillService {

  constructor(){
  }
  async create(data) {
    const newCapacityBill = await models.CapacityBill.create(data);
    return newCapacityBill;
  }

  async find() {
    const  capacityBill = await models.CapacityBill.findAll();
    return capacityBill;
  }

  async findOne(id) {
    const capacityBill = await models.CapacityBill.findByPk(id, {

    });
    return  capacityBill;
  }

  async update(id, changes) {
    const capacityBill=await this.findOne(id);
    const newCapacityBill=await capacityBill.update(changes);
    return newCapacityBill;
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CapacityBillService;
