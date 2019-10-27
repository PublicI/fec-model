'use strict';

module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.sequelize.transaction(async transaction => {
            await queryInterface.createTable(
                'fec_expenditures',
                {
                    filing_id: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: 'fec_filings',
                            key: 'filing_id',
                            onDelete: 'CASCADE'
                        }
                    },
                    form_type: DataTypes.STRING(20),
                    filer_committee_id_number: DataTypes.STRING(30),
                    transaction_id_number: DataTypes.STRING(30),
                    entity_type: DataTypes.STRING(5),
                    payee_organization_name: DataTypes.STRING(255),
                    payee_last_name: DataTypes.STRING(255),
                    payee_first_name: DataTypes.STRING(255),
                    payee_middle_name: DataTypes.STRING(255),
                    payee_prefix: DataTypes.STRING(10),
                    payee_suffix: DataTypes.STRING(10),
                    payee_street_1: DataTypes.STRING(255),
                    payee_street_2: DataTypes.STRING(255),
                    payee_city: DataTypes.STRING(100),
                    payee_state: DataTypes.STRING(30),
                    payee_zip_code: DataTypes.STRING(50),
                    election_code: DataTypes.STRING(30),
                    election_other_description: DataTypes.STRING(255),
                    expenditure_date: DataTypes.DATEONLY,
                    expenditure_amount: DataTypes.DECIMAL(12,2),
                    semi_annual_refunded_bundled_amt: DataTypes.STRING(50),
                    expenditure_purpose_descrip: DataTypes.STRING(255),
                    category_code: DataTypes.STRING(10),
                    beneficiary_committee_fec_id: DataTypes.STRING(50),
                    beneficiary_committee_name: DataTypes.STRING(255),
                    beneficiary_candidate_fec_id: DataTypes.STRING(50),
                    beneficiary_candidate_last_name: DataTypes.STRING(100),
                    beneficiary_candidate_first_name: DataTypes.STRING(100),
                    beneficiary_candidate_middle_name: DataTypes.STRING(100),
                    beneficiary_candidate_prefix: DataTypes.STRING(10),
                    beneficiary_candidate_office: DataTypes.STRING(50),
                    beneficiary_candidate_suffix: DataTypes.STRING(10),
                    beneficiary_candidate_state: DataTypes.STRING(10),
                    beneficiary_candidate_district: DataTypes.STRING(10),
                    conduit_name: DataTypes.STRING(255),
                    conduit_street_1: DataTypes.STRING(200),
                    conduit_street_2: DataTypes.STRING(200),
                    conduit_city: DataTypes.STRING(100),
                    conduit_state: DataTypes.STRING(10),
                    conduit_zip_code: DataTypes.STRING(50),
                    memo_code: DataTypes.STRING(5),
                    memo_text_description: DataTypes.STRING(200),
                    back_reference_tran_id_number: DataTypes.STRING(255),
                    back_reference_sched_name: DataTypes.STRING(100),
                    reference_to_si_or_sl_system_code_that_identifies_the_account: DataTypes.STRING(50)
                },
                { transaction }
            );

            await queryInterface.addIndex('fec_expenditures', ['filing_id'], {
                transaction
            });
            await queryInterface.addIndex(
                'fec_expenditures',
                ['filer_committee_id_number'],
                { transaction }
            );
            await queryInterface.addIndex('fec_expenditures', ['memo_code'], {
                transaction
            });
            await queryInterface.addIndex('fec_expenditures', ['form_type'], {
                transaction
            });
            await queryInterface.addIndex('fec_expenditures', {
                name: 'fec_expenditures_payee_organization_name_trgm',
                fields: ['payee_organization_name'],
                using:
                    queryInterface.sequelize.getDialect() == 'postgres'
                        ? 'gin'
                        : null,
                operator:
                    queryInterface.sequelize.getDialect() == 'postgres'
                        ? 'gin_trgm_ops'
                        : null,
                transaction
            });
            await queryInterface.addIndex('fec_expenditures', {
                name: 'fec_expenditures_payee_first_name_trgm',
                fields: ['payee_first_name'],
                using:
                    queryInterface.sequelize.getDialect() == 'postgres'
                        ? 'gin'
                        : null,
                operator:
                    queryInterface.sequelize.getDialect() == 'postgres'
                        ? 'gin_trgm_ops'
                        : null,
                transaction
            });
            await queryInterface.addIndex('fec_expenditures', {
                name: 'fec_expenditures_payee_last_name_trgm',
                fields: ['payee_last_name'],
                using:
                    queryInterface.sequelize.getDialect() == 'postgres'
                        ? 'gin'
                        : null,
                operator:
                    queryInterface.sequelize.getDialect() == 'postgres'
                        ? 'gin_trgm_ops'
                        : null,
                transaction
            });
            return queryInterface.addIndex('fec_expenditures', {
                name: 'fec_expenditures_payee_state',
                fields:
                    queryInterface.sequelize.getDialect() == 'postgres'
                        ? [
                              queryInterface.sequelize.fn(
                                  'upper',
                                  queryInterface.sequelize.col(
                                      'payee_state'
                                  )
                              )
                          ]
                        : 'payee_state',
                transaction
            });
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('fec_expenditures');
    }
};
