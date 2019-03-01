"use strict";
const log = console.log;

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("todo", {
        text: {
            type: DataTypes.STRING
        },
        complete: {
            type: DataTypes.BOOLEAN
        }
    })
}