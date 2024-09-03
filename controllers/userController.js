const { User } = require('../models');

exports.createUser = async (req, res) => {
  const { name, email } = req.body  // Extracting name and email from path parameters
  
  try {
    const user = await User.create({ username: name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user', details: error });
  }
};

exports.getUsers = async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await User.findAll();
      res.json(users);  // Respond with the list of users
    } catch (error) {
      // Handle errors (e.g., database connection issues)
      res.status(500).json({ error: 'Error fetching users', details: error.message });
    }
  };
  
  // Fetch a specific user by ID from the database
  exports.getUserById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the user by ID
      const user = await User.findByPk(id);
      if (user) {
        res.json(user);  // Respond with the user details
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user', details: error.message });
    }
  };