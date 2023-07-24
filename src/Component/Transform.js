//TransForm
import React, { useState } from 'react';

const Transform = ({ addTransaction }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    setDate('');
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        // placeholder="Date"
        required

      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default Transform;
