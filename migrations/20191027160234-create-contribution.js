'use strict';

module.exports = {
    up: (queryInterface, DataTypes) =>
        queryInterface.sequelize.transaction(async transaction => {
            await queryInterface.createTable(
                'fec_contributions',
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
                    transaction_id: DataTypes.STRING(50),
                    back_reference_tran_id_number: DataTypes.STRING(50),
                    back_reference_sched_name: DataTypes.STRING(50),
                    entity_type: DataTypes.STRING(10),
                    contributor_organization_name: DataTypes.STRING(255),
                    contributor_last_name: DataTypes.STRING(255),
                    contributor_first_name: DataTypes.STRING(255),
                    contributor_middle_name: DataTypes.STRING(255),
                    contributor_prefix: DataTypes.STRING(20),
                    contributor_suffix: DataTypes.STRING(20),
                    contributor_street_1: DataTypes.STRING(255),
                    contributor_street_2: DataTypes.STRING(255),
                    contributor_city: DataTypes.STRING(100),
                    contributor_state: DataTypes.STRING(30),
                    contributor_zip_code: DataTypes.STRING(30),
                    election_code: DataTypes.STRING(30),
                    election_other_description: DataTypes.STRING(255),
                    contribution_date: DataTypes.DATEONLY,
                    contribution_amount: DataTypes.DECIMAL(12, 2),
                    contribution_aggregate: DataTypes.DECIMAL(12, 2),
                    contribution_purpose_descrip: DataTypes.STRING(255),
                    contributor_employer: DataTypes.STRING(255),
                    contributor_occupation: DataTypes.STRING(255),
                    donor_committee_fec_id: DataTypes.STRING(50),
                    donor_committee_name: DataTypes.STRING(255),
                    donor_candidate_fec_id: DataTypes.STRING(50),
                    donor_candidate_last_name: DataTypes.STRING(255),
                    donor_candidate_first_name: DataTypes.STRING(255),
                    donor_candidate_middle_name: DataTypes.STRING(255),
                    donor_candidate_prefix: DataTypes.STRING(30),
                    donor_candidate_suffix: DataTypes.STRING(30),
                    donor_candidate_office: DataTypes.STRING(100),
                    donor_candidate_state: DataTypes.STRING(30),
                    donor_candidate_district: DataTypes.STRING(30),
                    conduit_name: DataTypes.STRING(255),
                    conduit_street1: DataTypes.STRING(200),
                    conduit_street2: DataTypes.STRING(200),
                    conduit_city: DataTypes.STRING(100),
                    conduit_state: DataTypes.STRING(20),
                    conduit_zip_code: DataTypes.STRING(30),
                    memo_code: DataTypes.STRING(10),
                    memo_text_description: DataTypes.STRING(255),
                    reference_code: DataTypes.STRING(50)
                },
                { transaction }
            );
            await queryInterface.addIndex('fec_contributions', ['filing_id'], {
                transaction
            });
            await queryInterface.addIndex(
                'fec_contributions',
                ['filer_committee_id_number'],
                { transaction }
            );
            await queryInterface.addIndex('fec_contributions', ['memo_code'], {
                transaction
            });
            await queryInterface.addIndex('fec_contributions', ['form_type'], {
                transaction
            });
            await queryInterface.addIndex('fec_contributions', {
                name: 'fec_contributions_contributor_organization_name_trgm',
                fields: ['contributor_organization_name'],
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
            await queryInterface.addIndex('fec_contributions', {
                name: 'fec_contributions_contributor_first_name_trgm',
                fields: ['contributor_first_name'],
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
            await queryInterface.addIndex('fec_contributions', {
                name: 'fec_contributions_contributor_last_name_trgm',
                fields: ['contributor_last_name'],
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
            return queryInterface.addIndex('fec_contributions', {
                name: 'fec_contributions_contributor_state',
                fields:
                    queryInterface.sequelize.getDialect() == 'postgres'
                        ? [
                              queryInterface.sequelize.fn(
                                  'upper',
                                  queryInterface.sequelize.col(
                                      'contributor_state'
                                  )
                              )
                          ]
                        : ['contributor_state'],
                transaction
            });
        }),

    down: (queryInterface, Sequelize) =>
        queryInterface.dropTable('fec_contributions')
};
