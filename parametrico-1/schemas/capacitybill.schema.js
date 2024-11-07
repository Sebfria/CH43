const Joi = require('joi');

const id = Joi.number().integer();
const clientId = Joi.number().integer();
const enrollment = Joi.number().integer();
const type = Joi.string();
const subtype = Joi.string();
const concept = Joi.string();
const value = Joi.number().precision(5);
//const name = Joi.string();



const createCapacityBillSchema = Joi.object({
  clientId: clientId,
  enrollment: enrollment,
  type: type,
  subtype: subtype,
  concept: concept,
  value: value,
});

const updateCapacityBillSchema = Joi.object({
  clientId: clientId,
  enrollment: enrollment,
  type: type,
  subtype: subtype,
  concept: concept,
  value: value,
});

const getCapacityBillSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCapacityBillSchema, updateCapacityBillSchema, getCapacityBillSchema }
