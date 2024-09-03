const User = require('./user');

class Contractor extends User {
  constructor(id, name, email, specialization, experience) {
    super(id, name, email);
    this.specialization = specialization;
    this.experience = experience;
  }

  static collection() {
    return 'contractors';
  }
}

module.exports = Contractor;
