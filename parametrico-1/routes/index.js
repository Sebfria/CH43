const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const customersRouter = require('./customers.router');
const cardOptionsRouter = require('./cardoptions.router');
const cardCalculationRouter = require('./cardcalculation.router');
const clientRouter = require('./client.router');
const doneRouter = require('./done.router');
const capacityBillRouter = require('./capacitybill.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/customers', customersRouter);
  router.use('/cardoptions', cardOptionsRouter);
  router.use('/cardcalculation', cardCalculationRouter);
  router.use('/client', clientRouter);
  router.use('/done', doneRouter);
  router.use('/capacitybill', capacityBillRouter);

}

module.exports = routerApi;
