const db = require('../config/firebaseConfig');

class LabourController {
  static async createLabour(req, res) {
    try {
      console.log('Request Body:', req.body);

      const { name, email, password ,role, skills,extertise,availability} = req.body;

      if (!name || !email || !password|| !role) {
        console.log('Missing fields in request body');
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Store data in Firebase Realtime Database
      const newLabourRef = db.ref('Labours').push();
      await newLabourRef.set({ name, email, password });

      console.log('Labour created with ID:', newLabourRef.key);

  let labourData = {
    status:"success",
    message:"Labour created successfully",
    data:{
      name:name,
      email:email,
      password:password,
    }
  }
    res.status(201).json(labourData);
    } catch (error) {
      console.error('Error in createLabour method:', error.message);
      let labourData = {
        status:"failure",
        message:"Something went wrong",
      }
      res.status(500).json(labourData);
    }
  }
}

module.exports = LabourController;
