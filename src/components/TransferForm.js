import React, { Fragment, useEffect, useState } from 'react';
import data from '../mock/transactions.json';
import Modal from './Modal';
import {toTimestamp} from '../helpers/Common';

const TransferForm = () => {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(5824.76);
    const fromAccount = useFormInput('Free Checking(4692) - ' + `${balance}`);
    const toAccount = useFormInput('');
    const amount = useFormInput('');
    const [showModal, setShowModal] = useState(false);

    const prepareTransaction = (e) => {
        e.preventDefault();
        // preview
        modalOpen();
    }

    const saveTransaction = (e) => {
        e.preventDefault();
        setBalance(balance - amount.value);
        const mydate = new Date();

        var payload = {
            amount: amount.value,
            merchant: toAccount.value,
            transactionDate: toTimestamp(mydate.getDate()),
            transactionType: 'Online Transfer',
            categoryCode: '#d' + Math.random()
        };

        const save = JSON.stringify(payload);
        const blob = new Blob([save], {type: "text/json"});

        
    }

    const modalOpen = () => {
        setShowModal(true);
      }
    
    const modalClose = (e) => {
        e.preventDefault();
        setShowModal(false);
    }

    return (
        <Fragment>
            <div className="c-card">
                <div className="c-card_header">
                    <h3 className="bg-teal text-white">
                        <i className="ico ico-arrows"></i> Make a Transfer
                    </h3>
                </div>
                <div className="c-card_body">
                    <form>
                        <div className="row">
                            <div className="form-group">
                                <label className="text-black text-upper">From Account:</label>
                                <input type="text" className="form-control" {...fromAccount} disabled="disabled" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label className="text-black text-upper">To Account:</label>
                                <input type="text" className="form-control" {...toAccount} placeholder="Enter Account Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label className="text-black text-upper">Amount:</label>
                                <input type="text" className="form-control" {...amount} placeholder="$ 0.00" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group pull-right">
                                <button className="btn btn-warning text-upper" onClick={prepareTransaction}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Modal show={showModal} handleClose={e => modalClose(e)}>
                <h2>Confirm Transaction</h2><hr />
                <div className="column-12">
                    <p>Details:</p>
                    <p>
                        From Account: {fromAccount.value}
                    </p>
                    <p>
                        To Account: {toAccount.value}
                    </p>
                    <p>
                        Amount: {amount.value}
                    </p>
                </div>
                <div className="column-12">
                    <button className="btn btn-warning text-upper" onClick={saveTransaction}>Confirm Transaction</button>
                </div>
            </Modal>
        </Fragment>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default TransferForm;