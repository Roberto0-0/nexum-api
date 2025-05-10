class Group {
    constructor(session, name) {
        this.session = session
        this.name = name
        this.players = []
        this.jobs = []
        this.status = true
        this.createdAt = Date.now()
    }
}

module.exports = { Group }

