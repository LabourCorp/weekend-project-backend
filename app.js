const express = require('express');
const app = express();
const { sequelize } = require('./models');

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
