import React, { useState } from 'react';
import DepositModal from './DepositModal';

function GoalCard({ goal, onEdit, onDelete, setGoals, goals }) {
  // State to show/hide the deposit modal
  const [showDeposit, setShowDeposit] = useState(false);

  // Calculate progress percentage
  const progress = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100);
  // Calculate remaining amount
  const remaining = Math.max(goal.targetAmount - goal.savedAmount, 0);
  // Check if goal is completed
  const isCompleted = goal.savedAmount >= goal.targetAmount;
  // Format deadline
  const deadline = new Date(goal.deadline).toLocaleDateString();

  // Handle delete button click
  const handleDelete = () => {
    // Delete from server
    fetch(`http://localhost:3000/goals/${goal.id}`, { method: 'DELETE' })
      .then(() => {
        onDelete(goal.id);
      });
  };

  // Handle deposit
  const handleDeposit = (amount) => {
    // Update on server
    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: Number(goal.savedAmount) + Number(amount) })
    })
      .then(res => res.json())
      .then((updatedGoal) => {
        // Update in parent state
        setGoals(goals.map(g => g.id === goal.id ? updatedGoal : g));
        setShowDeposit(false);
      });
  };

  return (
    <div className={`goal-card${isCompleted ? ' completed' : ''}`}>
      <h3>{goal.name}</h3>
      <div><strong>Category:</strong> {goal.category}</div>
      <div><strong>Target:</strong> ${goal.targetAmount.toLocaleString()}</div>
      <div><strong>Saved:</strong> ${goal.savedAmount.toLocaleString()}</div>
      <div><strong>Remaining:</strong> ${remaining.toLocaleString()}</div>
      <div><strong>Deadline:</strong> {deadline}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="goal-actions">
        <button onClick={() => onEdit(goal)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => setShowDeposit(true)}>Deposit</button>
      </div>
      {isCompleted && <div className="goal-completed">🎉 Goal Completed!</div>}
      {showDeposit && (
        <DepositModal
          onClose={() => setShowDeposit(false)}
          onDeposit={handleDeposit}
          goalName={goal.name}
        />
      )}
    </div>
  );
}

export default GoalCard;
