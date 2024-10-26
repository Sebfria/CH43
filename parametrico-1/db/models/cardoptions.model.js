const { Model, DataTypes, Sequelize } = require('sequelize');

const CARD_OPTIONS_TABLE = 'cardoptions';

const cardOptionsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  weight: {
    type: DataTypes.DECIMAL,

  },
  type: {
    type: DataTypes.STRING
  },
  variable: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  options: {
    type: DataTypes.TEXT,
  },
  value: {
    type: DataTypes.DECIMAL,
  },
}

class CardOptions extends Model {
  static associate(models){

  }
  static config(sequelize){
    return {
      sequelize,
      tablename: CARD_OPTIONS_TABLE,
      modelName: 'CardOptions',
      timestamps: false
    }
  }
}



module.exports = { CARD_OPTIONS_TABLE, cardOptionsSchema, CardOptions }
