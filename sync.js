'use strict';

const Umzug = require('umzug');

module.exports = (sequelize,cb) => {
    // https://github.com/abelnation/sequelize-migration-hello/blob/master/migrate.js#L27
    const umzug = new Umzug({
        storage: 'sequelize',
        storageOptions: {
            sequelize,
        },

        migrations: {
            params: [
                sequelize.getQueryInterface(),
                sequelize.constructor
            ],
            path: __dirname + '/migrations',
            pattern: /\.js$/
        },

        logging: console.log
    });

    umzug.up().then(cb);
}
