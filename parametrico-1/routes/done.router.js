const express = require('express');
//pendiente
const DoneService = require('./../services/done.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createDoneSchema, updateDoneSchema, getDoneSchema } = require('./../schemas/done.schema');

const router = express.Router();
const service = new DoneService();

router.get('/', async (req, res, next) => {
  try {
    const done = await service.find();
    res.json(done);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getDoneSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const done = await service.findOne(id);
      res.json(done);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createDoneSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newClient = await service.create(body);
      res.status(201).json(newClient);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getDoneSchema, 'params'),
  validatorHandler(updateDoneSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const done = await service.update(parseInt(id,10), body);
      res.json(done);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getDoneSchema, 'params'),
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
