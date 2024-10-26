const Joi = require('joi');

const id = Joi.number().integer();
const agent = Joi.string();
const variable = Joi.string();
const options = Joi.string();
const value = Joi.number();
const weight = Joi.number().precision(5);
const name = Joi.string();







const createCardCalculationSchema = Joi.object({
  agent: agent,
  variable: variable,
  options: options,
  value: value,
  weight: weight,
  name: name,
});

const updateCardCalculationSchema = Joi.object({
  agent: agent,
  variable: variable,
  options: options,
  value: value,
  weight: weight,
  name: name,
});

const getCardCalculationSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCardCalculationSchema, updateCardCalculationSchema, getCardCalculationSchema }
