'use strict';
module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    idgrupo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre_grupo: DataTypes.STRING,
    hora_grupo: DataTypes.TIME
  },{
    timestamps: false, 
    tableName: 'grupo'
  });
  Groups.associate = function(models) {
    // associations can be defined here
  };
  return Groups;
};