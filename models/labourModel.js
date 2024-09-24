const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

class Labour {
  constructor(userId, isSkilled, expertise, { is_Available = 0 } = {}) {
    this.userId = userId;
    this.isSkilled = isSkilled;
    this.expertise = expertise;
    this.is_Available = is_Available;
  }

  static collection() {
    return 'Labours';
  }
}

module.exports = Labour;
