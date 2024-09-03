const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const contractorRoutes = require('./routes/contractorRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/customers', customerRoutes);
app.use('/contractors', contractorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
