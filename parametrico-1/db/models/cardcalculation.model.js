const { Model, DataTypes, Sequelize } = require('sequelize');

const CARD_CALCULATION_TABLE = 'cardcalculation';

const cardCalculationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  agent: {
    type: DataTypes.STRING
  },
  variable: {
    type: DataTypes.STRING,
  },
  options: {
    type: DataTypes.TEXT,
  },
  value: {
    type: DataTypes.DECIMAL,
  },
  weight: {
    type: DataTypes.DECIMAL,

  },
  name: {
    type: DataTypes.TEXT,
  },


}

class CardCalculation extends Model {
  static associate(models){

  }
  static config(sequelize){
    return {
      sequelize,
      tablename: CARD_CALCULATION_TABLE,
      modelName: 'CardCalculation',
      timestamps: false
    }
  }
}



module.exports = { CARD_CALCULATION_TABLE, cardCalculationSchema, CardCalculation };
