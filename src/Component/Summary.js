// Summary
import React from 'react';

const Summary = ({ transactions }) => {
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expense: ${Math.abs(totalExpense).toFixed(2)}</p>
      <p>Balance: ${balance.toFixed(2)}</p>
    </div>
  );
};

export default Summary;
