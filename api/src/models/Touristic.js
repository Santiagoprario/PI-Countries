const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activities', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    difficulty : {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min:1,
            max:5
        }
    },
    duration : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    season : {
        type: DataTypes.STRING,
        validate : { 
        isIn: [['otono', 'invierno','primavera','verano']],
        }
    },
  },{
    timestamps : true,
    createdAt: false,
    updateAt: 'actualizado'
  });
};
