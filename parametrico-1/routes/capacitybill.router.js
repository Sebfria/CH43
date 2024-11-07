const express = require('express');

const CapacityBillService = require('./../services/capacitybill.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCapacityBillSchema, updateCapacityBillSchema, getCapacityBillSchema } = require('./../schemas/capacitybill.schema');

const router = express.Router();
const service = new CapacityBillService();

router.get('/', async (req, res, next) => {
  try {
    const capacityBill = await service.find();
    res.json(capacityBill);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCapacityBillSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const capacityBill = await service.findOne(id);
      res.json(capacityBill);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCapacityBillSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCapacityBill = await service.create(body);
      res.status(201).json(newCapacityBill);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCapacityBillSchema, 'params'),
  validatorHandler(updateCapacityBillSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const capacityBill = await service.update(parseInt(id,10), body);
      res.json(capacityBill);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCapacityBillSchema, 'params'),
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
