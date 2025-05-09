const { Group } = require("../../models/Group")
const jobs = require("../../objects/jobs.json")

class GroupCreate {
    execute(groupProps) {
        const { session, name } = groupProps

        let newGroup = new Group(session, name)

        for (let job of jobs) {
            newGroup.jobs.push({
                id: job.id,
                amount: job.amount
            })
        }

        return newGroup
    }
}

module.exports = { GroupCreate }

