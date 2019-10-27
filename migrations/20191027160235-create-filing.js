'use strict';

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('fec_filings', {
            filing_id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            record_type: DataTypes.STRING(100),
            ef_type: DataTypes.STRING(100),
            fec_version: DataTypes.STRING(100),
            soft_name: DataTypes.STRING(255),
            soft_ver: DataTypes.STRING(100),
            report_id: DataTypes.INTEGER,
            report_number: DataTypes.INTEGER,
            comment: DataTypes.STRING(255)
        });
        await queryInterface.addIndex('fec_filings', {
            fields: ['report_id']
        })
        return queryInterface.addIndex('fec_filings', {
            fields: ['report_number']
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('fec_filings');
    }
};
