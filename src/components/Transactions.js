import React, { Fragment, useMemo } from 'react';
import DataTable from './DataTable';

const Transactions = ({ transactions }) => {
    const columns = useMemo(
        () => [
            {
                Header: "Transactions Data",
                columns: [
                    {
                        Header: "Date",
                        accessor: "transactionDate",
                        Cell: ({ cell: { value } }) => {
                            const date = new Date(value);
                            const month = `${date.toLocaleString('default', {month: 'long'})}`;
                            const day = `${date.getDate()}`.padStart(2, "0");
                            return (
                                <Fragment>
                                    {date > 0 ? `${month + ' ' + day}` : ""}
                                </Fragment>
                            );
                        }
                    },
                    {
                        Header: "Beneficiary",
                        accessor: "merchant"
                    }
                ]
            },
            {
                Header: "Transaction Amounts",
                columns: [
                    {
                        Header: "Amount",
                        accessor: "amount",
                        Cell: ({ cell: { value } }) => {
                            return (
                                <Fragment>
                                    {value > 0 ? `$${value}` : 0}
                                </Fragment>
                            )
                        }
                    }
                ]
            }
        ],
        []
    );

    return (
        <Fragment>
            <div className="c-card">
                <div className="c-card_header">
                    <h3 className="bg-teal text-white">
                        <i className="ico ico-briefcase"></i> Recent Transactions
                    </h3>
                </div>
                <div className="c-card_body">
                    <div className="column-12">
                        <DataTable columns={columns} data={transactions} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Transactions;