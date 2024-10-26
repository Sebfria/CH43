const Joi = require('joi');

const id = Joi.number().integer();
const weight = Joi.number().precision(5);
const type = Joi.string();
const variable = Joi.string();
const description = Joi.string();
const options = Joi.string();
const value = Joi.number();




const createCardOptionsSchema = Joi.object({
  weight: weight,
  type: type,
  variable: variable,
  description: description,
  options: options,
  value: value
});

const updateCardOptionsSchema = Joi.object({
  weight: weight,
  type: type,
  variable: variable,
  description: description,
  options: options,
  value: value
});

const getCardOptionsSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCardOptionsSchema, updateCardOptionsSchema, getCardOptionsSchema }
