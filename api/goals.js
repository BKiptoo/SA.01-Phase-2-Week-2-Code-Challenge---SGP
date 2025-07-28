// Simple API endpoint for goals - works with Vercel
let goals = [
  {
    "id": 1,
    "name": "Emergency Fund",
    "targetAmount": 10000,
    "savedAmount": 7500,
    "category": "Emergency",
    "deadline": "2024-12-31",
    "createdAt": "2024-01-15"
  },
  {
    "id": 2,
    "name": "Vacation to Japan",
    "targetAmount": 5000,
    "savedAmount": 3200,
    "category": "Travel",
    "deadline": "2024-06-15",
    "createdAt": "2024-02-01"
  },
  {
    "id": 3,
    "name": "New Laptop",
    "targetAmount": 1500,
    "savedAmount": 1500,
    "category": "Electronics",
    "deadline": "2024-03-30",
    "createdAt": "2024-01-20"
  },
  {
    "id": 4,
    "name": "Down Payment - House",
    "targetAmount": 50000,
    "savedAmount": 25000,
    "category": "Real Estate",
    "deadline": "2025-12-31",
    "createdAt": "2024-01-10"
  }
];

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathParts = url.pathname.split('/');
  const goalId = pathParts[pathParts.length - 1];

  switch (req.method) {
    case 'GET':
      if (goalId && goalId !== 'goals' && !isNaN(goalId)) {
        // Get single goal
        const goal = goals.find(g => g.id === parseInt(goalId));
        if (goal) {
          res.status(200).json(goal);
        } else {
          res.status(404).json({ error: 'Goal not found' });
        }
      } else {
        // Get all goals
        res.status(200).json(goals);
      }
      break;

    case 'POST': {
      // Create new goal
      const newGoal = {
        id: Math.max(...goals.map(g => g.id), 0) + 1,
        ...req.body,
        createdAt: new Date().toISOString().split('T')[0]
      };
      goals.push(newGoal);
      res.status(201).json(newGoal);
      break;
    }

    case 'PUT': {
      // Update goal
      if (goalId && !isNaN(goalId)) {
        const index = goals.findIndex(g => g.id === parseInt(goalId));
        if (index !== -1) {
          goals[index] = { ...goals[index], ...req.body };
          res.status(200).json(goals[index]);
        } else {
          res.status(404).json({ error: 'Goal not found' });
        }
      } else {
        res.status(400).json({ error: 'Invalid goal ID' });
      }
      break;
    }

    case 'DELETE': {
      // Delete goal
      if (goalId && !isNaN(goalId)) {
        const index = goals.findIndex(g => g.id === parseInt(goalId));
        if (index !== -1) {
          const deletedGoal = goals.splice(index, 1)[0];
          res.status(200).json(deletedGoal);
        } else {
          res.status(404).json({ error: 'Goal not found' });
        }
      } else {
        res.status(400).json({ error: 'Invalid goal ID' });
      }
      break;
    }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
