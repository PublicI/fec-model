'use strict';

module.exports = {
    up: (queryInterface, DataTypes) =>
        queryInterface.sequelize.transaction(async transaction => {
            await queryInterface.createTable(
                'fec_debts',
                {
                    filing_id: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: 'fec_filings',
                            key: 'filing_id',
                            onDelete: 'CASCADE'
                        }
                    },
                    form_type: DataTypes.STRING(50),
                    filer_committee_id_number: DataTypes.STRING(50),
                    transaction_id_number: DataTypes.STRING(50),
                    entity_type: DataTypes.STRING(10),
                    creditor_organization_name: DataTypes.STRING(255),
                    creditor_last_name: DataTypes.STRING(255),
                    creditor_first_name: DataTypes.STRING(255),
                    creditor_middle_name: DataTypes.STRING(255),
                    creditor_prefix: DataTypes.STRING(20),
                    creditor_suffix: DataTypes.STRING(20),
                    creditor_street_1: DataTypes.STRING(255),
                    creditor_street_2: DataTypes.STRING(255),
                    creditor_city: DataTypes.STRING(100),
                    creditor_state: DataTypes.STRING(30),
                    creditor_zip_code: DataTypes.STRING(30),
                    purpose_of_debt_or_obligation: DataTypes.STRING(255),
                    beginning_balance_this_period: DataTypes.DECIMAL(12, 2),
                    incurred_amount_this_period: DataTypes.DECIMAL(12, 2),
                    payment_amount_this_period: DataTypes.DECIMAL(12, 2),
                    balance_at_close_this_period: DataTypes.DECIMAL(12, 2)
                },
                { transaction }
            );
            await queryInterface.addIndex('fec_debts', ['filing_id'], {
                transaction
            });
            return queryInterface.addIndex(
                'fec_debts',
                ['filer_committee_id_number'],
                { transaction }
            );
        }),

    down: (queryInterface, Sequelize) =>
        queryInterface.dropTable('fec_debts')
};
