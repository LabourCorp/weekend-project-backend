const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

class LabourModel {
  static async createLabour(labourData) {
    try {
      const docRef = db.collection('Labours').doc();
      await docRef.set(labourData);
      return docRef.id;
    } catch (error) {
      console.error('Error creating labour in database:', error.message);
      throw error; // Ensure the error is propagated to be caught in the controller
    }
  }
}

module.exports = LabourModel;
