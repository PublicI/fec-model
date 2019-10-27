'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        if (queryInterface.sequelize.getDialect() === 'postgres') {
            return queryInterface.sequelize.query(`
                CREATE EXTENSION IF NOT EXISTS pg_trgm;
            `);
        }
        return Promise.resolve();
    },

    down: (queryInterface, Sequelize) => {
        if (queryInterface.sequelize.getDialect() === 'postgres') {
            return queryInterface.sequelize.query(`
                DROP EXTENSION IF EXISTS pg_trgm;
            `);
        }
        return Promise.resolve();
    }
};
