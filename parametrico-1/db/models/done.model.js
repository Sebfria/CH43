const { Model, DataTypes, Sequelize } = require('sequelize');

const DONE_TABLE = 'done';

const doneSchema = {
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
  }


}

class Done extends Model {
  static associate(models){

  }
  static config(sequelize){
    return {
      sequelize,
      tablename: DONE_TABLE,
      modelName: 'Done',
      timestamps: false
    }
  }
}



module.exports = { DONE_TABLE, doneSchema, Done };
