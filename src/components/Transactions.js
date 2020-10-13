import React, { Fragment, useEffect, useMemo } from 'react';
import transactionData from '../mock/transactions.json';
import DataTable from './DataTable';
import { useState } from 'react';
import ApiClient from "../services/ApiClient";

const Transactions = () => {
    const [transaction, setTransaction] = useState([]);
    const apiClient = new ApiClient();

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

    const getTransactions = () => {
        apiClient.getService('transactions').then(response => {
            setTransaction(response);
        }).catch(error => {
            if (error === 401 || error === 404) {
                console.log('Error loading data');
            }
        })
    }

    useEffect(() => {
        // setTransaction(transactionData.data);
        getTransactions();
    }, []);

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
                        <DataTable columns={columns} data={transaction} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Transactions;