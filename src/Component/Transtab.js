// Component/Transtab.js
import React from 'react';

const Transtab = ({ transactions, sortField, onSort, deleteTransaction }) => {
  return (
    <table>
      <thead>
        {/* ... */}
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transtab;
