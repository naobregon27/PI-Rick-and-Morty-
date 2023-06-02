const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         },
         name:{
            type: DataTypes.INTEGER,
            allowNull: false,
         },
         status:{
            type: DataTypes.ENUM("Alive","Dead","unknown"),
            allowNull: false,
         },
         species: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         gender:{
            type: DataTypes.ENUM("Male","Female","unknown","Genderless"),
            allowNull: false,
         },
         origin:{
            type: DataTypes.STRING,
            allowNull: false,
         },
         image:{
            type: DataTypes.STRING,
            allowNull: false,
         }

      }, { timestamps: false });
}
;
