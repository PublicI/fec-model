'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.sequelize.getDialect() === 'postgres'
            ? queryInterface.sequelize.query(`
                CREATE EXTENSION IF NOT EXISTS pg_trgm;
            `)
            : Promise.resolve(),

    down: (queryInterface, Sequelize) =>
        queryInterface.sequelize.getDialect() === 'postgres'
            ? queryInterface.sequelize.query(`
                DROP EXTENSION IF EXISTS pg_trgm;
            `)
            : Promise.resolve()
};
