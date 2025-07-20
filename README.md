# Smart Goal Planner

A simple, clean web app to help you manage multiple savings goals, track your progress, and stay motivated! Built with React and json-server for easy local data persistence.

---

## 🚀 Features
- **Add, edit, and delete savings goals** (e.g., Travel Fund, Emergency Fund)
- **Track progress** for each goal with a visual progress bar
- **Make deposits** to any goal and see your savings grow
- **Overview dashboard**: total goals, total saved, completed goals, warnings for deadlines, and overdue alerts
- **All data is saved locally** in `db.json` using `json-server` (no backend setup needed!)

---

## 📸 Screenshots

### Main Dashboard Overview
![Smart Goal Planner Dashboard](./screenshots/dashboard-overview.png)
*Clean, modern dashboard showing your financial journey overview with key statistics and goal tracking*

### Enhanced Warning System
![Warning Notifications](./screenshots/warning-notifications.png)
*Professional notification system with stylish pill-shaped alerts for overdue goals and upcoming deadlines*

### Goal Management Interface
![Goal Cards Interface](./screenshots/goal-cards.png)
*Beautiful goal cards displaying progress, targets, and action buttons with a clean modern design*

### Key Features Highlighted:
- ✨ **Modern Design**: Professional website styling with gradients and glass-morphism effects
- 🎯 **Smart Notifications**: Enhanced warning system for deadline management
- 📊 **Visual Progress**: Clear progress tracking with statistics
- 🎨 **Responsive Layout**: Adapts beautifully to different screen sizes
- 🔔 **Interactive Alerts**: Hover effects and smooth animations

---

## 🛠️ Tech Stack
- **React** (frontend)
- **json-server** (local REST API)
- **CSS** (clean, modern UI)

---

## 📝 Getting Started

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd SA.01-Phase-2-Week-2-Code-Challenge---SGP
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local API (json-server)
```bash
npx json-server --watch db.json --port 3000
```
- This will serve your goals data at `http://localhost:3000/goals`

### 4. Start the React app
```bash
npm run dev
```
- Open the app in your browser (usually at `http://localhost:5173`)

---

## 📁 Project Structure
```
SA.01-Phase-2-Week-2-Code-Challenge---SGP/
  ├── db.json                # Your local data (goals)
  ├── src/
  │   ├── App.jsx            # Main app logic
  │   ├── components/
  │   │   ├── Overview.jsx   # Dashboard summary
  │   │   ├── GoalCard.jsx   # Single goal display
  │   │   ├── GoalForm.jsx   # Add/edit goal form
  │   │   └── DepositModal.jsx # Deposit modal
  │   └── App.css            # App styles
  └── ...
```

---

## ✨ Usage Tips
- Click **+ Add New Goal** to create a goal
- Use **Edit** or **Delete** on any goal card
- Click **Deposit** to add money to a goal
- Watch for warnings if a deadline is soon or overdue!

---

## 🙋‍♂️ Questions or Improvements?
Feel free to ask for help or suggest features!

---

## 📷 Adding Screenshots
To display the screenshots in this README:
1. Save your screenshot images in the `screenshots/` directory
2. Name them: `dashboard-overview.png`, `warning-notifications.png`, `goal-cards.png`, `add-goal-modal.png`
3. The README will automatically display them in the Screenshots section above

---

**Happy saving! 💰**
