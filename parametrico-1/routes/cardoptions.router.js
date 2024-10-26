const express = require('express');

const CardOptionsService = require('./../services/cardoptions.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCardOptionsSchema, updateCardOptionsSchema, getCardOptionsSchema } = require('./../schemas/cardoptions.schema');

const router = express.Router();
const service = new CardOptionsService();

router.get('/', async (req, res, next) => {
  try {
    const cardOptions = await service.find();
    res.json(cardOptions);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCardOptionsSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cardOptions = await service.findOne(id);
      res.json(cardOptions);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCardOptionsSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCardOptions = await service.create(body);
      res.status(201).json(newCardOptions);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCardOptionsSchema, 'params'),
  validatorHandler(updateCardOptionsSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const cardOptions = await service.update(parseInt(id,10), body);
      res.json(cardOptions);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCardOptionsSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
