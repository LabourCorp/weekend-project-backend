
class Contractor {
  constructor(id, userid, specialization, experience) {
    this.id = id;
    this.userid = userid
    this.specialization = specialization;
    this.experience = experience;
  }

  static collection() {
    return 'contractors';
  }
}

module.exports = Contractor;
