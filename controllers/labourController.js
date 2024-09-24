const db = require('../config/firebaseConfig');
const Labour = require('../models/labourModel');

class LabourController {
  static async createLabour(req, res) {
    try {
      console.log('Request Body:', req.body);

      const { userId, isSkilled, expertise } = req.body;

      const labour = new Labour(userId, isSkilled, expertise)
      // Store data in Firebase Realtime Database
      const newLabourRef = db.ref('Labours').push();
      await newLabourRef.set(labour);

      console.log('Labour created with ID:', newLabourRef.key);

      let labourData = {
        status: "success",
        message: "Labour created successfully",
        data: {
          id: newLabourRef.key,
          ...labour
        }
      }
      res.status(201).json(labourData);
    } catch (error) {
      console.error('Error in createLabour method:', error.message);
      let labourData = {
        status: "failure",
        message: "Something went wrong",
      }
      res.status(500).json(labourData);
    }
  }

  static async getallLabour(res) {
    try {
      // Reference to the 'Labours' node in Firebase
      const laboursRef = db.ref(Labour.collection());

      // Fetch all labour data
      const snapshot = await laboursRef.once('value');
      const labours = snapshot.val();

      if (!labours) {
        return res.status(404).json({
          status: "failure",
          message: "No labours found"
        });
      }

      const labourArray = Object.keys(labours).map(key => ({
        id: key,
        ...labours[key]
      }));

      let labourData = {
        status: "success",
        message: "Labours fetched successfully",
        data: labourArray
      };

      res.status(200).json(labourData);
    } catch (error) {
      console.error('Error in getallLabour method:', error.message);
      let labourData = {
        status: "failure",
        message: "Something went wrong",
      };
      res.status(500).json(labourData);
    }
  }

  static async getLabourById(req, res) {
    try {
      const { id } = req.params;
      const labourRef = db.ref(`Labours/${id}`);
      const snapshot = await labourRef.once('value');
      const labour = snapshot.val();

      if (!labour) {
        return res.status(404).json({
          status: "failure",
          message: "Labour not found"
        });
      }

      res.status(200).json({
        status: "success",
        message: "Labour fetched successfully",
        data: {
          id,
          ...labour
        }
      });
    } catch (error) {
      console.error('Error in getLabourById method:', error.message);
      res.status(500).json({
        status: "failure",
        message: "Something went wrong",
      });
    }
  }
}

module.exports = LabourController;
