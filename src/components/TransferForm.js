import React, { Fragment, useState } from 'react';
import Modal from './Modal';
import ApiClient from "../services/ApiClient";
const apiClient = new ApiClient();
const TransferForm = ({ onPostedTransaction }) => {
    const [balance, setBalance] = useState(5824.76);
    const fromAccount = 'Free Checking(4692) - ' + balance;
    const toAccount = useFormInput('');
    const amount = useFormInput('');
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');
    const [show, setShow] = useState('');

    const prepareTransaction = (e) => {
        e.preventDefault();
        // preview
        if (toAccount.value === '' || toAccount.value === undefined) {
            alert('Fill beneficiary account please');
        } else if (amount.value === '' || amount.value === undefined) {
            alert('Fill amount please');
        } else {
            modalOpen();
        }
    }

    const saveTransaction = (e) => {
        e.preventDefault();
        setBalance(balance - amount.value);
        if (balance <= -500) {
            alert('Cant transfer more money');
        } else {
            var payload = {
                amount: amount.value,
                merchant: toAccount.value,
                transactionDate: new Date(),
                transactionType: 'Online Transfer',
                categoryCode: '#d' + Math.random()
            };
            
            apiClient.postService('transactions', payload).then(response => {
                setShow(true);
                setMessage('Transaction sucessfully processed');
                onPostedTransaction();
                setTimeout( () => {
                    setShowModal(false);
                    setShow(false);
                    setMessage('');
                }, 2000);
            }).catch(error => {
                if (error === 401 || error === 404) {
                    console.log('An error ocurred while trying to save data.');
                }
            });
        }
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
                                <input type="text" className="form-control" value={fromAccount} disabled />
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
                        From Account: {fromAccount}
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
                <div className="" show={show}>
                    {message}
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