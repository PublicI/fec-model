'use strict';

module.exports = {
    up: (queryInterface, DataTypes) =>
        queryInterface.sequelize.transaction(async transaction => {
            await queryInterface.createTable(
                'fec_group_summaries',
                {
                    filing_id: {
                        type: DataTypes.INTEGER,
                        unique: true,
                        references: {
                            model: 'fec_filings',
                            key: 'filing_id',
                            onDelete: 'CASCADE'
                        }
                    },
                    form_type: DataTypes.STRING(100),
                    filer_committee_id_number: DataTypes.STRING(100),
                    entity_type: DataTypes.STRING(5),
                    organization_name: DataTypes.STRING(255),
                    individual_last_name: DataTypes.STRING(255),
                    individual_first_name: DataTypes.STRING(255),
                    individual_middle_name: DataTypes.STRING(255),
                    individual_prefix: DataTypes.STRING(100),
                    individual_suffix: DataTypes.STRING(100),
                    change_of_address: DataTypes.STRING(10),
                    street_1: DataTypes.STRING(255),
                    street_2: DataTypes.STRING(255),
                    city: DataTypes.STRING(100),
                    state: DataTypes.STRING(10),
                    zip_code: DataTypes.STRING(20),
                    individual_occupation: DataTypes.STRING(255),
                    individual_employer: DataTypes.STRING(255),
                    report_code: DataTypes.STRING(10),
                    report_type: DataTypes.STRING(10),
                    original_amendment_date: DataTypes.DATEONLY,
                    coverage_from_date: DataTypes.DATEONLY,
                    coverage_through_date: DataTypes.DATEONLY,
                    total_contribution: DataTypes.DECIMAL(12, 2),
                    total_independent_expenditure: DataTypes.DECIMAL(12, 2),
                    person_completing_last_name: DataTypes.STRING(255),
                    person_completing_first_name: DataTypes.STRING(255),
                    person_completing_middle_name: DataTypes.STRING(255),
                    person_completing_prefix: DataTypes.STRING(100),
                    person_completing_suffix: DataTypes.STRING(100),
                    date_signed: DataTypes.DATEONLY,
                },
                { transaction }
            );
            return queryInterface.addIndex(
                'fec_group_summaries',
                ['filer_committee_id_number'],
                { transaction }
            );
        }),

    down: (queryInterface, Sequelize) =>
        queryInterface.dropTable('fec_group_summaries')
};
