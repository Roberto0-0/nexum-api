const { GroupCreate } = require("../usecases/group/create")
const { GroupGetBySession } = require("../usecases/group/getBySession")
const { GroupSaveChanges } = require("../usecases/group/saveChanges")
const { GroupGetAll } = require("../usecases/group/getAll")
const { existsSync, mkdirSync } = require("node:fs")

const path = require("node:path")

class GroupController {
    constructor(storagePath) {
        this.storage = path.join(process.cwd(), `${storagePath}/nexum_storage`)
        this._storagePathExist()
    }

    create(groupProps) {
        return new GroupCreate().execute(groupProps)
    }

    async getBySession(session) {
        const service = new GroupGetBySession(this.storage)
        return await service.execute(session)
    }

    async getAll() {
        return new GroupGetAll(this.storage).execute()
    }

    async saveChanges(session, data) {
        const service = new GroupSaveChanges(this.storage)
        return await service.execute(session, data)
    }

    _storagePathExist() {
        if (!existsSync(this.storage)) mkdirSync(this.storage)
    }
}

module.exports = { GroupController }

