const jobs = require("../../objects/jobs.json")

class JobGetAll {
    execute() {
        return jobs
    }
}

module.exports = { JobGetAll }
