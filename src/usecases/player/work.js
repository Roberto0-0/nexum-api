const jobs = require("../../objects/jobs.json")

class PlayerWork {
    execute(jobId) {
        let job = null
        const RNG = (max, min) => Math.floor(Math.random() * (max - min) + min)

        job = jobs.find(x => x.id === jobId)
        if (!job) {
            job = {
                salary: 600,
                variation: 500,
            }
        }

        let finalSalary = RNG(job.salary, job.variation)

        return {
            salary: finalSalary
        }
    }
}

module.exports = { PlayerWork }
