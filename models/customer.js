const User = require('./user');

class Customer extends User {
  constructor(id, name, email, contactNumber) {
    super(id, name, email);
    this.contactNumber = contactNumber;
  }

  static collection() {
    return 'customers';
  }
}

module.exports = Customer;
