// Simple API configuration for development and production
const API_BASE_URL = import.meta.env.PROD 
  ? '/api' 
  : 'http://localhost:3000';

export const apiConfig = {
  baseURL: API_BASE_URL,
  goals: `${API_BASE_URL}/goals`
};
