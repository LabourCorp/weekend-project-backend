const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require('cors')

Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-database-name.firebaseio.com'
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
const otpRoutes = require('./routes/otpRoutes');
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const contractorRoutes = require('./routes/contractorRoutes');

// Use routes
app.use('/otp', otpRoutes);
app.use('/users', userRoutes);
app.use('/customers', customerRoutes);
app.use('/contractors', contractorRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js OTP login app!');

});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
