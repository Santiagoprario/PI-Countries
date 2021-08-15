const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('touristic', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty : {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min:1,
            max:5
        }
    },
    duration : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    season : {
        type: DataTypes.STRING,
        allowNull: false,
        validate : { 
        isIn: [['otono', 'invierno','primavera','verano']],
        }
       
    },
  });
};
