// File generated using sequelize CLI to collect all the models from the
// models directory and associates them if necessary.

// Literal expression, executes code in 'strict mode'
'use strict';

// Required NPM packages for program
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

// Creates  'db' variable to allow ORM to use relations and queries
const db = {};

// Configuration for deployment on sites such as Heroku or through others
if (config.use_env_variable) {
    let sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    let sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// FileSystem NPM package -- used to dirrect models in separate files
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        let model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

// Runs associations as objects between various database models, creating
// relations between users and location for example
Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// Exports functionality to be used in models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
