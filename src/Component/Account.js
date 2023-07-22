// Component/Account.js
import React from 'react';

const Account = ({ transactions }) => {
  const accountBalance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div>
      <h2>Account Information</h2>
      <p>Account Balance: ${accountBalance.toFixed(2)}</p>
      {/* Add more account-related information here if needed */}
    </div>
  );
};

export default Account;
