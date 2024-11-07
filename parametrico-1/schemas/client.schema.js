const Joi = require('joi');
const id = Joi.number().integer();
const name = Joi.string();
const clientId = Joi.number().integer();






const createClientSchema = Joi.object({
  name: name,
  clientId: clientId,
});

const updateClientSchema = Joi.object({
  name: name,
  clientId: clientId,
});

const getClientSchema = Joi.object({
  id: id.required(),
});

module.exports = { createClientSchema, updateClientSchema, getClientSchema }
