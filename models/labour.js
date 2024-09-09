
class Labour {
    constructor(id, userid, adhaar, skills) {
        this.id = id
        this.userid = userid
        this.adhaar = adhaar;
        this.skills = skills;
    }

    static collection() {
        return 'labours';
    }
}

module.exports = Labour;