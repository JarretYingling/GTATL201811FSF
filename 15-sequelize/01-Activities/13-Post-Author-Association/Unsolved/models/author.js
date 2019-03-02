"use strict";

const Post = require("./post");

module.exports = function (sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  }, {
    underscored: true
  });

  // one Post.associate has many associations
  Author.associate = function (models) {

    // Add a hasMany association to Post here
    // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
    // onDelete: deleting parent also deletes all children
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });

    // add another association insode the single Post.associate

  }

  return Author;
};