// App.js
import React, { useState } from 'react';
import Transtab from './Component/Transtab';
import Transform from './Component/Transform';
import Search from './Component/Search';
import Summary from './Component/Summary';
import AccountForm from './Component/AccountForm';

const App = () => {
  const [transactions, setTransactions] = useState([
    // Sample data for demonstration
    { id: 1, date: '2023-07-15', description: 'Food', amount: 2500 },
    { id: 2, date: '2023-07-16', description: 'Transport', amount: -100 },
    { id: 3, date: '2023-07-17', description: 'Housing', amount: -975 },
    { id: 4, date: '2023-07-17', description: 'Entertainment', amount: -13.25 },
    { id: 5, date: '2023-08-17', description: 'Gift', amount: 50 },

    // Add more transactions here as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
    <h1>FlatIron Bank Transactions</h1>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <Transtab transactions={filteredTransactions} deleteTransaction={deleteTransaction} />
    <Transform addTransaction={addTransaction} />
    <Summary transactions={filteredTransactions} /> 
    <AccountForm addTransaction={addTransaction} /> 
  </div>
  
  );
};

export default App;
