"use strict";

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  }, {
    underscored: true
  });

  // one Post.associate has many associations
  Post.associate = function (models) {
  
    // Add a belongsTo association to Authors here
    // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });

  // add another association insode the single Post.associate

  }

  return Post;
};