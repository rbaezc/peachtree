import React, { Fragment, useEffect } from 'react';
import TransferForm from './components/TransferForm';
import Transactions from './components/Transactions';
import logo from './assets/images/logo.jpg'
import { useState } from 'react';
import ApiClient from "./services/ApiClient";
import './App.css';

const apiClient = new ApiClient();
const getTransactions = () => {
  return apiClient.getService('transactions')
    .catch(error => {
      if (error === 401 || error === 404) {
          console.log('Error loading data');
      }
    })
}

function App() {
  const [transactions, setTransactions] = useState([]);

  const refreshTransactions = () => getTransactions().then(setTransactions);
  useEffect(() => {
    refreshTransactions();
  }, []);

  return (
    <Fragment>
      <div className="header">
        <div className="wrapper">
          <img src={logo} className="logo" alt="Peach Tree" />
        </div>
      </div>
      <div className="wrapper">
        <div className="row">
          <div className="column-4">
            <TransferForm onPostedTransaction={refreshTransactions}/>
          </div>
          <div className="column-8">
            <Transactions transactions={transactions} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
