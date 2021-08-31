const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    idCountry : {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion : {
      type: DataTypes.STRING,
    },
    area : {
      type: DataTypes.INTEGER,
    },
    population : {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps : false,
  });
};



