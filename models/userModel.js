class User {
  constructor(firstName, lastName, email, role, contactNumber, address, { rating = 0, isBlacklisted = false } = {},) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email
    this.contactNumber = contactNumber;
    this.role = role;
    this.address = address;
    this.rating = rating;
    this.isBlacklisted = isBlacklisted
  }

  static collection() {
    return 'Users';
  }
}

module.exports = User;
