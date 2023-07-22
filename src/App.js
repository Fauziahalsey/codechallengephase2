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
    <div>
      <h1>Bank Transactions</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Transtab transactions={filteredTransactions} deleteTransaction={deleteTransaction} />
      <Transform addTransaction={addTransaction} />
      <Summary transactions={filteredTransactions} /> {/* Include the Summary component */}
      <AccountForm addTransaction={addTransaction} /> {/* Include the AccountForm component */}
    </div>
  );
};

export default App;
