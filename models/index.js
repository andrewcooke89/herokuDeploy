'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize('postgres://bozamjlofnfxhb:72f22fa3c82a20eb97f757b5b6b177c3efe3770abd04842269b03fb69661ea73@ec2-54-235-108-217.compute-1.amazonaws.com:5432/d9duaceqjk6rba');

const files = fs.readdirSync(__dirname);

for (let file of files) {
  if (file !== 'index.js') {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
