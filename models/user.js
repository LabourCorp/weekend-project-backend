class User {
  constructor(id, firstName, lastName, email, contactNumber, role_id) {

    this.id = id;
    this.role_id = role_id;
    this.rating = rating;
    this.address = address;
    this.blacklisted = blacklisted;

    if (!User.isValidName(firstName)) {
      throw new Error('First name must contain only alphabetic characters without special characters.');
    }
    if (!User.isValidName(lastName)) {
      throw new Error('Last name must contain only alphabetic characters without special characters.');
    }

    this.firstName = firstName;
    this.lastName = lastName;

    // Validate email (simple regex for illustration purposes)
    if (!User.isValidEmail(email)) {
      throw new Error('Invalid email format.');
    }

    this.email = email;

    // Validate contact number
    if (!User.isValidContactNumber(contactNumber)) {
      throw new Error('Contact number must contain exactly 10 digits.');
    }

    this.contactNumber = contactNumber;
  }


  // Validation for email (simple regex for demonstration)
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validation for contact number (10 digits only)
  static isValidContactNumber(contactNumber) {
    const contactNumberRegex = /^\d{10}$/;
    return contactNumberRegex.test(contactNumber);
  }

  static collection() {
    return 'users';
  }
}

module.exports = User;
