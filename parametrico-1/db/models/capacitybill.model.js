const { Model, DataTypes, Sequelize } = require('sequelize');

const CAPACITY_BILL_TABLE = 'capacitybill';

const capacityBillSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  clientId: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  enrollment: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  type: {
    type: DataTypes.STRING
  },
  subtype: {
    type: DataTypes.STRING,
  },
  concept: {
    type: DataTypes.TEXT,
  },
  value: {
    type: DataTypes.DECIMAL,
  },

 // name: {
 //  type: DataTypes.TEXT,
  //},


}

class CapacityBill extends Model {
  static associate(models){

  }
  static config(sequelize){
    return {
      sequelize,
      tablename: CAPACITY_BILL_TABLE,
      modelName: 'CapacityBill',
      timestamps: false
    }
  }
}



module.exports = { CAPACITY_BILL_TABLE, capacityBillSchema, CapacityBill };
