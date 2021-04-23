'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('Message', {
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
  // The timestamp is added automatically by Sequelize
  // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
});
