class User {
  constructor(id, firstname, lastname, email, contact) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.contact = contact
    
  }

  static collection() {
    return 'users';
  }
}

module.exports = User;
