'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sync = require('../sync');

module.exports = function(options) {
    const basename = path.basename(__filename);
    const db = {};

    let sequelize = new Sequelize(options.name, options.user, options.pass, {
        host: options.host,
        dialect: options.driver,
        port: options.port,
        define: {
            createdAt: 'created_date',
            updatedAt: 'updated_date',
            underscored: true,
            timestamps: false
        },
        logging: false
    });

    fs.readdirSync(__dirname)
        .filter(
            file =>
                file.indexOf('.') !== 0 &&
                file !== basename &&
                file.slice(-3) === '.js'
        )
        .forEach(file => {
            const model = sequelize['import'](path.join(__dirname, file));
            db[model.name] = model;
        });

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    db.sync = sync.bind(this, sequelize);

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db;
};
