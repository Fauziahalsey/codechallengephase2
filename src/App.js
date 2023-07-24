import React, { useState, useEffect } from 'react';
import Transtab from './Component/Transtab';
import Transform from './Component/Transform';
import Search from './Component/Search';
import Summary from './Component/Summary';
import AccountForm from './Component/AccountForm';


const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-07-15', description: 'Food', amount: -10.55 },
    { id: 2, date: '2023-07-16', description: 'Transportation', amount:  -116.39 },
    { id: 3, date: '2023-07-17', description: 'Housing', amount: -975 },
    { id: 4, date: '2023-07-17', description: 'Entertainment', amount: -13.25 },
    { id: 5, date: '2023-08-17', description: 'Gift', amount: 50 },
    { id: 6, date: '2023-08-17', description: 'income', amount: 1000 },
    { id: 7, date: '2023-08-17', description: 'fashion', amount: -24.99 },
    { id: 8, date: '2023-08-17', description: 'office lunch', amount: 2000 },



  ]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

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
