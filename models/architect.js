class Architect {
    constructor(id, user_id, experience, documents) {
        this.id = id;
        this.user_id = user_id;
        this.experience = experience;
        this.documents = documents;
    }

    static collection() {
        return 'architects'
    }

}

module.exports = Architect