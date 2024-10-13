require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const labourRoutes = require('./routes/labourRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json()); // Ensure this is included to parse JSON bodies

// Routes
app.use('/labours', labourRoutes);
app.use('/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
