const { Model, DataTypes, Sequelize } = require('sequelize');

const CLIENT_TABLE = 'client';

const clientSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

 name: {
  type: DataTypes.TEXT,
  },
  clientId: {
    allowNull: false,
    type: DataTypes.INTEGER
  }

}

class Client extends Model {
  static associate(models){

  }
  static config(sequelize){
    return {
      sequelize,
      tablename: CLIENT_TABLE,
      modelName: 'Client',
      timestamps: false
    }
  }
}



module.exports = { CLIENT_TABLE, clientSchema, Client };
