import React, { useState } from 'react';

function DepositModal({ onClose, onDeposit, goalName }) {
  // State for the deposit amount
  const [amount, setAmount] = useState('');
  // State for error message
  const [error, setError] = useState('');

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const num = Number(amount);
    if (!num || num <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    setError('');
    onDeposit(num);
    setAmount('');
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Deposit to {goalName}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            min="1"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
          {error && <div className="error">{error}</div>}
          <div className="modal-actions">
            <button type="submit">Deposit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DepositModal;
