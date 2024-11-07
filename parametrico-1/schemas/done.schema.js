const Joi = require('joi');
const id = Joi.number().integer();
const clientId = Joi.number().integer();
const enrollment = Joi.number().integer();






const createDoneSchema = Joi.object({
  clientId: clientId,
  enrollment: enrollment,
});

const updateDoneSchema = Joi.object({
  clientId: clientId,
  enrollment: enrollment,
});

const getDoneSchema = Joi.object({
  id: id.required(),
});

module.exports = { createDoneSchema, updateDoneSchema, getDoneSchema }
