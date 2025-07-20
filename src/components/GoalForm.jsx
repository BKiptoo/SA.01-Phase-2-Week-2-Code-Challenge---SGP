import React, { useState, useEffect } from 'react';

const categories = [
  'Travel', 'Emergency', 'Electronics', 'Real Estate', 'Vehicle', 'Education', 'Shopping', 'Retirement', 'Home'
];

function GoalForm({ onClose, onCreate, onUpdate, editGoal }) {
  // State for form fields
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState('');

  // If editing, pre-fill the form
  useEffect(() => {
    if (editGoal) {
      setName(editGoal.name);
      setTargetAmount(editGoal.targetAmount);
      setCategory(editGoal.category);
      setDeadline(editGoal.deadline);
    } else {
      setName('');
      setTargetAmount('');
      setCategory(categories[0]);
      setDeadline('');
    }
  }, [editGoal]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !targetAmount || !category || !deadline) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    const goalData = {
      name,
      targetAmount: Number(targetAmount),
      category,
      deadline,
      savedAmount: editGoal ? editGoal.savedAmount : 0,
      createdAt: editGoal ? editGoal.createdAt : new Date().toISOString().slice(0, 10)
    };
    if (editGoal) {
      // Update on server
      fetch(`http://localhost:3000/goals/${editGoal.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...editGoal, ...goalData })
      })
        .then(res => res.json())
        .then(updatedGoal => {
          onUpdate(updatedGoal);
        });
    } else {
      // Create on server
      fetch('http://localhost:3000/goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(goalData)
      })
        .then(res => res.json())
        .then(newGoal => {
          onCreate(newGoal);
        });
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{editGoal ? 'Edit Goal' : 'Add New Goal'}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Goal Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="number"
            min="1"
            placeholder="Target Amount"
            value={targetAmount}
            onChange={e => setTargetAmount(e.target.value)}
            required
          />
          <select value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="date"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
            required
          />
          {error && <div className="error">{error}</div>}
          <div className="modal-actions">
            <button type="submit">{editGoal ? 'Update' : 'Add Goal'}</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GoalForm;
