'use strict';

module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.sequelize.transaction(async transaction => {
            await queryInterface.createTable(
                'fec_campaign_summaries',
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
                    committee_name: DataTypes.STRING(255),
                    change_of_address: DataTypes.STRING(255),
                    street_1: DataTypes.STRING(255),
                    street_2: DataTypes.STRING(255),
                    city: DataTypes.STRING(255),
                    state: DataTypes.STRING(100),
                    zip_code: DataTypes.STRING(100),
                    election_state: DataTypes.STRING(255),
                    election_district: DataTypes.STRING(255),
                    report_code: DataTypes.STRING(100),
                    election_code: DataTypes.STRING(255),
                    election_date: DataTypes.DATEONLY,
                    state_of_election: DataTypes.STRING(255),
                    coverage_from_date: DataTypes.DATEONLY,
                    coverage_through_date: DataTypes.DATEONLY,
                    treasurer_last_name: DataTypes.STRING(255),
                    treasurer_first_name: DataTypes.STRING(255),
                    treasurer_middle_name: DataTypes.STRING(255),
                    treasurer_prefix: DataTypes.STRING(255),
                    treasurer_suffix: DataTypes.STRING(255),
                    date_signed: DataTypes.DATEONLY,
                    col_a_total_contributions_no_loans: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_total_contributions_refunds: DataTypes.DECIMAL(12, 2),
                    col_a_net_contributions: DataTypes.DECIMAL(12, 2),
                    col_a_total_operating_expenditures: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_total_offset_to_operating_expenditures: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_net_operating_expenditures: DataTypes.DECIMAL(12, 2),
                    col_a_cash_on_hand_close_of_period: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_debts_to: DataTypes.DECIMAL(12, 2),
                    col_a_debts_by: DataTypes.DECIMAL(12, 2),
                    col_a_individual_contributions_itemized: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_individual_contributions_unitemized: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_total_individual_contributions: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_political_party_contributions: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_pac_contributions: DataTypes.DECIMAL(12, 2),
                    col_a_candidate_contributions: DataTypes.DECIMAL(12, 2),
                    col_a_total_contributions: DataTypes.DECIMAL(12, 2),
                    col_a_transfers_from_authorized: DataTypes.DECIMAL(12, 2),
                    col_a_candidate_loans: DataTypes.DECIMAL(12, 2),
                    col_a_other_loans: DataTypes.DECIMAL(12, 2),
                    col_a_total_loans: DataTypes.DECIMAL(12, 2),
                    col_a_offset_to_operating_expenditures: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_other_receipts: DataTypes.DECIMAL(12, 2),
                    col_a_total_receipts: DataTypes.DECIMAL(12, 2),
                    col_a_operating_expenditures: DataTypes.DECIMAL(12, 2),
                    col_a_transfers_to_authorized: DataTypes.DECIMAL(12, 2),
                    col_a_candidate_loan_repayments: DataTypes.DECIMAL(12, 2),
                    col_a_other_loan_repayments: DataTypes.DECIMAL(12, 2),
                    col_a_total_loan_repayments: DataTypes.DECIMAL(12, 2),
                    col_a_refunds_to_individuals: DataTypes.DECIMAL(12, 2),
                    col_a_refunds_to_party_committees: DataTypes.DECIMAL(12, 2),
                    col_a_refunds_to_other_committees: DataTypes.DECIMAL(12, 2),
                    col_a_total_refunds: DataTypes.DECIMAL(12, 2),
                    col_a_other_disbursements: DataTypes.DECIMAL(12, 2),
                    col_a_total_disbursements: DataTypes.DECIMAL(12, 2),
                    col_a_cash_beginning_reporting_period: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_a_total_receipts_period: DataTypes.DECIMAL(12, 2),
                    col_a_subtotals: DataTypes.DECIMAL(12, 2),
                    col_a_total_disbursements_period: DataTypes.DECIMAL(12, 2),
                    col_a_cash_on_hand_close: DataTypes.DECIMAL(12, 2),
                    col_b_total_contributions_no_loans: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_b_total_contributions_refunds: DataTypes.DECIMAL(12, 2),
                    col_b_net_contributions: DataTypes.DECIMAL(12, 2),
                    col_b_total_operating_expenditures: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_b_total_offset_to_operating_expenditures: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_b_net_operating_expenditures: DataTypes.DECIMAL(12, 2),
                    col_b_individual_contributions_itemized: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_b_individual_contributions_unitemized: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_b_total_individual_contributions: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_b_political_party_contributions: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_b_pac_contributions: DataTypes.DECIMAL(12, 2),
                    col_b_candidate_contributions: DataTypes.DECIMAL(12, 2),
                    col_b_total_contributions: DataTypes.DECIMAL(12, 2),
                    col_b_transfers_from_authorized: DataTypes.DECIMAL(12, 2),
                    col_b_candidate_loans: DataTypes.DECIMAL(12, 2),
                    col_b_other_loans: DataTypes.DECIMAL(12, 2),
                    col_b_total_loans: DataTypes.DECIMAL(12, 2),
                    col_b_offset_to_operating_expenditures: DataTypes.DECIMAL(
                        12,
                        2
                    ),
                    col_b_other_receipts: DataTypes.DECIMAL(12, 2),
                    col_b_total_receipts: DataTypes.DECIMAL(12, 2),
                    col_b_operating_expenditures: DataTypes.DECIMAL(12, 2),
                    col_b_transfers_to_authorized: DataTypes.DECIMAL(12, 2),
                    col_b_candidate_loan_repayments: DataTypes.DECIMAL(12, 2),
                    col_b_other_loan_repayments: DataTypes.DECIMAL(12, 2),
                    col_b_total_loan_repayments: DataTypes.DECIMAL(12, 2),
                    col_b_refunds_to_individuals: DataTypes.DECIMAL(12, 2),
                    col_b_refunds_to_party_committees: DataTypes.DECIMAL(12, 2),
                    col_b_refunds_to_other_committees: DataTypes.DECIMAL(12, 2),
                    col_b_total_refunds: DataTypes.DECIMAL(12, 2),
                    col_b_other_disbursements: DataTypes.DECIMAL(12, 2),
                    col_b_total_disbursements: DataTypes.DECIMAL(12, 2)
                },
                { transaction }
            );
            return queryInterface.addIndex(
                'fec_campaign_summaries',
                ['filer_committee_id_number'],
                { transaction }
            );
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('fec_campaign_summaries');
    }
};
