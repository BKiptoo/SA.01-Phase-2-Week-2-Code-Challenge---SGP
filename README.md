# Smart Goal Planner 💰

A simple web app to help you create and track your savings goals. Set targets, make deposits, and watch your progress grow!

**🌐 Live Demo:** [https://sa-01-phase-2-week-2-code-challenge.vercel.app/](https://sa-01-phase-2-week-2-code-challenge.vercel.app/)

---

## What It Does

- ✅ Create multiple savings goals (vacation, emergency fund, new car, etc.)
- ✅ Track your progress with visual progress bars
- ✅ Add money to any goal anytime
- ✅ See warnings when deadlines are approaching
- ✅ Get an overview of all your goals in one place
- ✅ Works on phone, tablet, and computer

---

## How to Use

### Online (Easiest Way)
Just visit the live demo link above - no setup needed!

### Run Locally

1. **Get the code**
   ```bash
   git clone https://github.com/BKiptoo/SA.01-Phase-2-Week-2-Code-Challenge---SGP.git
   cd SA.01-Phase-2-Week-2-Code-Challenge---SGP
   ```

2. **Install**
   ```bash
   npm install
   ```

3. **Start the database**
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. **Start the app** (in a new terminal)
   ```bash
   npm run dev
   ```

5. **Open your browser** to `http://localhost:5173`

---

## Features Explained

### 🎯 **Create Goals**
- Click "Create Your First Goal" or "+ Add Goal"
- Enter goal name (e.g., "Vacation Fund")
- Set target amount (e.g., $3000)
- Choose category (Travel, Emergency, etc.)
- Pick a deadline

### 💳 **Add Money**
- Click "Deposit" on any goal
- Enter amount to add
- Progress bar updates automatically
- Goal completes when you reach the target

### 📊 **Track Progress**
- See how much you've saved vs. target
- Visual progress bars show completion
- Dashboard shows totals across all goals
- Get warnings for upcoming deadlines

---

## Built With

- **React** - For the user interface
- **CSS** - Simple, clean styling
- **json-server** - Local database for development
- **Vercel** - Hosting and deployment

---

## Project Structure

```
📁 Project Files
├── README.md           # This file
├── db.json            # Your goals data
├── src/
│   ├── App.jsx        # Main app
│   ├── App.css        # Styles
│   └── components/    # App pieces
│       ├── Overview.jsx    # Dashboard
│       ├── GoalCard.jsx    # Individual goals
│       ├── GoalForm.jsx    # Add/edit form
│       └── DepositModal.jsx # Add money popup
└── api/goals.js       # Server code for live version
```

---

## Sample Goals

The app comes with example goals to show how it works:
- Travel Fund - Japan ($3,200 saved of $5,000)
- Emergency Fund ($37,500 saved of $10,000) ✓ Complete
- New Laptop ($1,500 saved of $1,500) ✓ Complete
- House Down Payment ($12,000 saved of $50,000)

---

## Common Questions

**Q: Is my data safe?**
A: For local use, data stays on your computer. The live demo resets periodically.

**Q: Can I use this for real money tracking?**
A: This is a demo app. For real finances, use dedicated financial software.

**Q: Does it work on mobile?**
A: Yes! The design adapts to all screen sizes.

**Q: Can I modify it?**
A: Absolutely! It's open source - feel free to customize.

---

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Test production build
```

---

## Need Help?

- 🐛 **Found a bug?** [Report it here](https://github.com/BKiptoo/SA.01-Phase-2-Week-2-Code-Challenge---SGP/issues)
- 💡 **Have an idea?** [Share it here](https://github.com/BKiptoo/SA.01-Phase-2-Week-2-Code-Challenge---SGP/discussions)
- 🌐 **Try it live:** [Demo link](https://sa-01-phase-2-week-2-code-challenge.vercel.app/)

---

## Author

**BKiptoo** - [GitHub Profile](https://github.com/BKiptoo)

Created as part of Moringa School Phase 2 Week 2 Code Challenge.

---

**Start tracking your savings goals today! 🎯**

## 🚀 Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | Frontend Framework | 19.1.0 |
| **Vite** | Build Tool & Dev Server | 7.0.4 |
| **CSS3** | Styling (Custom Properties) | - |
| **json-server** | Local Development API | 1.0.0-beta.3 |
| **Vercel** | Production Deployment | - |
| **Node.js** | Serverless Functions | 18.x |

---

## �️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/BKiptoo/SA.01-Phase-2-Week-2-Code-Challenge---SGP.git
   cd SA.01-Phase-2-Week-2-Code-Challenge---SGP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development API server**
   ```bash
   npx json-server --watch db.json --port 3000
   ```
   This serves your goals data at `http://localhost:3000/goals`

4. **Start the React development server**
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
SA.01-Phase-2-Week-2-Code-Challenge---SGP/
├── 📄 README.md              # Project documentation
├── 📄 package.json           # Dependencies and scripts
├── 📄 vite.config.js         # Vite configuration
├── 📄 vercel.json            # Vercel deployment config
├── 📄 db.json                # Local development data
├── 📄 DEPLOYMENT.md          # Deployment guide
├── 🗂️ api/                   # Production API endpoints
│   └── goals.js              # Serverless goals API
├── 🗂️ src/                   # Source code
│   ├── 📄 App.jsx            # Main application component
│   ├── 📄 App.css            # Global styles
│   ├── 📄 main.jsx           # React entry point
│   ├── 🗂️ components/        # React components
│   │   ├── Overview.jsx      # Dashboard overview
│   │   ├── GoalCard.jsx      # Individual goal cards
│   │   ├── GoalForm.jsx      # Goal creation/editing
│   │   └── DepositModal.jsx  # Deposit interface
│   └── 🗂️ config/            # Configuration
│       └── api.js            # API endpoint configuration
└── 🗂️ public/               # Static assets
    └── vite.svg              # Vite logo
```

---

## 🎮 Usage Guide

### Creating Your First Goal
1. Click the **"Create Your First Goal"** button on the hero section
2. Fill in the goal details:
   - **Name**: Give your goal a descriptive name
   - **Target Amount**: Set your savings target
   - **Category**: Choose from 9 predefined categories
   - **Deadline**: Set a target completion date
3. Click **"Add Goal"** to create your goal

### Managing Goals
- **View Progress**: Each goal shows progress percentage and remaining amount
- **Make Deposits**: Click the "Deposit" button to add money to any goal
- **Edit Goals**: Click "Edit" to modify goal details
- **Delete Goals**: Click "Delete" to remove goals you no longer need

### Dashboard Features
- **Total Goals**: See your overall goal count
- **Total Saved**: View your cumulative savings across all goals
- **Completed Goals**: Track your achievements
- **Warnings**: Stay informed about upcoming deadlines

---

## 🎨 Design Philosophy

The Smart Goal Planner follows a **simple, clean design approach**:

- **Minimalist UI**: Clean interface without overwhelming complexity
- **CSS Custom Properties**: Consistent color scheme and theming
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized for fast loading and smooth interactions

---

## 🌐 Deployment

### Development vs Production

The application automatically switches between environments:

- **Development**: Uses `json-server` on `localhost:3000`
- **Production**: Uses Vercel serverless functions at `/api/goals`

### Deploying to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

3. **Automatic Deployments**
   - Every push to `main` triggers automatic deployment
   - Preview deployments for pull requests

---

## 🧪 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code analysis |

---

## 📊 Sample Data

The application comes with sample goals to demonstrate functionality:

- **Travel Fund - Japan** (Travel): $3,200 / $5,000
- **Emergency Fund** (Emergency): $37,500 / $10,000 ✅
- **New Laptop** (Electronics): $1,500 / $1,500 ✅
- **Down Payment - House** (Real Estate): $12,000 / $50,000
- **Car Maintenance** (Vehicle): $600 / $800
- **Education Fund** (Education): $5,000 / $20,000
- **Holiday Gifts** (Shopping): $200 / $1,000
- **Retirement Savings** (Retirement): $15,000 / $100,000
- **Home Renovation** (Home): $1,000 / $7,500

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices
- Use semantic commit messages
- Test your changes locally
- Ensure responsive design compatibility

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**BKiptoo**
- GitHub: [@BKiptoo](https://github.com/BKiptoo)
- Project: [Smart Goal Planner](https://github.com/BKiptoo/SA.01-Phase-2-Week-2-Code-Challenge---SGP)

---

## 🙏 Acknowledgments

- Built as part of Moringa School Phase 2 Week 2 Code Challenge
- Inspired by modern financial planning applications
- Designed with user experience and simplicity in mind

---

## 📞 Support

Having issues or questions? 

- 📫 **Issues**: [Open a GitHub Issue](https://github.com/BKiptoo/SA.01-Phase-2-Week-2-Code-Challenge---SGP/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/BKiptoo/SA.01-Phase-2-Week-2-Code-Challenge---SGP/discussions)
- 🌐 **Live Demo**: [Try it live](https://sa-01-phase-2-week-2-code-challenge.vercel.app/)

---

<div align="center">

**🎯 Start tracking your financial goals today!**

[Live Demo](https://sa-01-phase-2-week-2-code-challenge.vercel.app/) • [Source Code](https://github.com/BKiptoo/SA.01-Phase-2-Week-2-Code-Challenge---SGP) • [Report Bug](https://github.com/BKiptoo/SA.01-Phase-2-Week-2-Code-Challenge---SGP/issues)

Made with ❤️ for better financial planning

</div>
