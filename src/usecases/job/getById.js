const jobs = require("../../objects/jobs.json")

class JobGetById {
    execute(id) {
        const job = jobs.find(x => x.id === id)
        if (!job) return {
            success: false,
        }

        return {
            success: true,
            data: job
        }
    }
}

module.exports = { JobGetById }
