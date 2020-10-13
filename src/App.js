import React, { Fragment } from 'react';
import TransferForm from './components/TransferForm';
import Transactions from './components/Transactions';
import logo from './assets/images/logo.jpg'
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="header">
        <div className="wrapper">
          <img src={logo} className="logo" />
        </div>
      </div>
      <div className="wrapper">
        <div className="row">
          <div className="column-4">
            <TransferForm />
          </div>
          <div className="column-8">
            <Transactions />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
