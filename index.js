// index.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a test route
app.get('/', (req, res) => {
  res.send('Forgot Password API is running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
