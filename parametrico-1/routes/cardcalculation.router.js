const express = require('express');
//pendiente
const CardCalculationService = require('./../services/cardcalculation.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCardCalculationSchema, updateCardCalculationSchema, getCardCalculationSchema } = require('./../schemas/cardcalculation.schema');

const router = express.Router();
const service = new CardCalculationService();

router.get('/', async (req, res, next) => {
  try {
    const cardCalculation = await service.find();
    res.json(cardCalculation);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCardCalculationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cardCalculation = await service.findOne(id);
      res.json(cardCalculation);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCardCalculationSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCardCalculation = await service.create(body);
      res.status(201).json(newCardCalculation);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCardCalculationSchema, 'params'),
  validatorHandler(updateCardCalculationSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const cardCalculation = await service.update(parseInt(id,10), body);
      res.json(cardCalculation);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCardCalculationSchema, 'params'),
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
