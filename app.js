require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const labourRoutes = require('./routes/labourRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Ensure this is included to parse JSON bodies

// Routes
app.use('/api', labourRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
