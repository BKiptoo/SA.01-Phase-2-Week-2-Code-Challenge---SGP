import React from 'react';

// Helper function to check if a date is within 30 days from now
function isWithin30Days(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = (date - now) / (1000 * 60 * 60 * 24); // days
  return diff <= 30 && diff > 0;
}

// Helper function to check if a date is overdue
function isOverdue(goal) {
  const now = new Date();
  const deadline = new Date(goal.deadline);
  return deadline < now && goal.savedAmount < goal.targetAmount;
}

function Overview({ goals }) {
  // Total number of goals
  const totalGoals = goals.length;
  // Total money saved across all goals
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  // Number of completed goals
  const completedGoals = goals.filter(g => Number(g.savedAmount) >= Number(g.targetAmount)).length;

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="overview-stats">
        <div><strong>Total Goals:</strong> {totalGoals}</div>
        <div><strong>Total Saved:</strong> ${totalSaved.toLocaleString()}</div>
        <div><strong>Completed Goals:</strong> {completedGoals}</div>
      </div>
      <div className="overview-warnings">
        {goals.map(goal => {
          if (isOverdue(goal)) {
            return <div key={goal.id} className="overdue">⚠️ <strong>{goal.name}</strong> is overdue!</div>;
          } else if (isWithin30Days(goal.deadline) && goal.savedAmount < goal.targetAmount) {
            return <div key={goal.id} className="warning">⏰ <strong>{goal.name}</strong> deadline is soon!</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Overview;
