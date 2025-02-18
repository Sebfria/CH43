const { User, UserSchema } = require('./user.model');
const { Customer , CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Product , ProductSchema } = require('./product.model');
const { Order , OrderSchema } = require('./order.model');
const { OrderProduct , OrderProductSchema } = require('./order-product.model');
const { CardOptions, cardOptionsSchema} = require('./cardoptions.model');
const { CardCalculation, cardCalculationSchema} = require('./cardcalculation.model');
const { Client, clientSchema} = require('./client.model');
const { Done, doneSchema} = require('./done.model');
const { CapacityBill, capacityBillSchema} = require('./capacitybill.model');



function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  CardOptions.init(cardOptionsSchema,CardOptions.config(sequelize));
  CardCalculation.init(cardCalculationSchema,CardCalculation.config(sequelize));
  Client.init(clientSchema,Client.config(sequelize));
  Done.init(doneSchema,Done.config(sequelize));
  CapacityBill.init(capacityBillSchema,CapacityBill.config(sequelize));


  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
  OrderProduct.associate(sequelize.models);
  CardOptions.associate(sequelize.models);
  CardCalculation.associate(sequelize.models);
  Client.associate(sequelize.models);
  Done.associate(sequelize.models);
  CapacityBill.associate(sequelize.models)
}

module.exports = setupModels;
