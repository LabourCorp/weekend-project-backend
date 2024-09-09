class Customer {
  constructor(id, userId) {
    this.id = id;
    this.userId = userId;
  }

  static collection() {
    return 'customers';
  }
}

module.exports = Customer;
