import React, { useEffect, useState } from 'react';
import './App.css';
import Overview from './components/Overview';
import GoalForm from './components/GoalForm';
import GoalCard from './components/GoalCard';

function App() {
  // State to store all goals
  const [goals, setGoals] = useState([]);
  // State to show/hide the add goal form
  const [showForm, setShowForm] = useState(false);
  // State to store the goal being edited (if any)
  const [editGoal, setEditGoal] = useState(null);
  // Loading state
  const [loading, setLoading] = useState(true);

  // Fetch goals from the API when the app loads
  useEffect(() => {
    fetch('http://localhost:3000/goals')
      .then((res) => res.json())
      .then((data) => {
        setGoals(data);
        setLoading(false);
      })
      .catch((err) => {
        alert('Failed to fetch goals!');
        setLoading(false);
      });
  }, []);

  // Handler to open the add goal form
  const handleAddGoal = () => {
    setEditGoal(null);
    setShowForm(true);
  };

  // Handler to open the edit goal form
  const handleEditGoal = (goal) => {
    setEditGoal(goal);
    setShowForm(true);
  };

  // Handler to close the form
  const handleCloseForm = () => {
    setShowForm(false);
    setEditGoal(null);
  };

  // Handler to add a new goal
  const handleCreateGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
    setShowForm(false);
  };

  // Handler to update a goal
  const handleUpdateGoal = (updatedGoal) => {
    setGoals(goals.map((g) => (g.id === updatedGoal.id ? updatedGoal : g)));
    setShowForm(false);
    setEditGoal(null);
  };

  // Handler to delete a goal
  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  return (
    <div className="website-container">
      {/* Website Header */}
      <header className="website-header">
        <div className="header-content">
          <div className="logo">
            <h1>💰 Smart Goal Planner</h1>
            <p>Master your financial future, one goal at a time</p>
          </div>
          <nav className="main-nav">
            <button className="nav-btn active">Dashboard</button>
            <button className="nav-btn">Goals</button>
            <button className="nav-btn">Analytics</button>
            <button className="nav-btn">Settings</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="app-container">
          {/* Hero Section */}
          <section className="hero-section">
            <h2>Welcome to Your Financial Journey</h2>
            <p>Track, manage, and achieve your savings goals with our intelligent planning system</p>
            <button className="add-goal-btn" onClick={handleAddGoal}>
              <span>✨</span> Create Your First Goal
            </button>
          </section>

          {/* Overview Dashboard */}
          <Overview goals={goals} />
          
          {/* Goals Section */}
          <section className="goals-section">
            <div className="section-header">
              <h3>Your Active Goals</h3>
              <button className="secondary-btn" onClick={handleAddGoal}>+ Add Goal</button>
            </div>
            
            <div className="goals-list">
              {loading ? (
                <div className="loading-state">
                  <div className="loading-spinner"></div>
                  <p>Loading your goals...</p>
                </div>
              ) : goals.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">🎯</div>
                  <h3>No goals yet!</h3>
                  <p>Start your financial journey by creating your first savings goal</p>
                  <button className="empty-cta-btn" onClick={handleAddGoal}>Create Goal</button>
                </div>
              ) : (
                goals.map((goal) => (
                  <GoalCard
                    key={goal.id}
                    goal={goal}
                    onEdit={handleEditGoal}
                    onDelete={handleDeleteGoal}
                    setGoals={setGoals}
                    goals={goals}
                  />
                ))
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="website-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Smart Goal Planner</h4>
            <p>Your trusted partner in financial planning</p>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Goal Tracking</li>
              <li>Progress Analytics</li>
              <li>Smart Reminders</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Smart Goal Planner. Built with ❤️ for your financial success.</p>
        </div>
      </footer>

      {/* Modal */}
      {showForm && (
        <GoalForm
          onClose={handleCloseForm}
          onCreate={handleCreateGoal}
          onUpdate={handleUpdateGoal}
          editGoal={editGoal}
        />
      )}
    </div>
  );
}

export default App;
