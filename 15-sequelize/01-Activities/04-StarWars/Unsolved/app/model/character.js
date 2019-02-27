"use strict";

const Sequelize = require("sequelize");

const connection = require("../config/connection.js");

var Character = connection.define("allcharacters", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        notNull: true
    },
    /*
    routeName: {
        type: Sequelize.STRING(255),
        notNull: true
    },
    */
    name: {
        type: Sequelize.STRING(255),
        notNull: true
    },
    role: {
        type: Sequelize.STRING(255),
        notNull: true
    },
    age: {
        type: Sequelize.INTEGER,
        notNull: true
    },
    forcePoints: {
        type: Sequelize.INTEGER,
        notNull: true
    }
})

Character.sync()
    .then(function () {
        // do nothing, or populate some data in your new tables
    });

module.exports = Character;