const { JobGetById } = require("../usecases/job/getById");
const { JobGetAll } = require("../usecases/job/getAll");

class JobController {
    getById(id) {
        return new JobGetById().execute(id)
    }

    getAll() {
        return new JobGetAll().execute()
    }
}

module.exports = { JobController }
