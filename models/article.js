'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};
//npx sequelize model:create --name Groups --attributes idgrupo:integer,nombre_grupo:string,hora_grupo:time
