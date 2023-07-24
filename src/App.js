import React, { useState, useEffect } from 'react';
import Transtab from './Component/Transtab';
import Transform from './Component/Transform';
import Search from './Component/Search';
import Summary from './Component/Summary';
import AccountForm from './Component/AccountForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
