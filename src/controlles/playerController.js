const { GroupGetBySession } = require("../usecases/group/getBySession")
const { PlayerCreate } = require("../usecases/player/create")
const { PlayerXpUpgrade } = require("../usecases/player/xpUpgrade")
const { PlayerCashTaxa } = require("../usecases/player/cashTaxa")

const path = require("node:path")

class PlayerController {
    constructor(storagePath) {
        this.storage = path.join(process.cwd(), `${storagePath}/nexum_storage`)
    }

    create(playerProps) {
        return new PlayerCreate().execute(playerProps)
    }

    async getBySerialized(session, serialized) {
        const groupGetBySessionService = new GroupGetBySession(this.storage)
        const service = new PlayerGetBySerialized(groupGetBySessionService)
        return await service.execute(session, serialized)
    }

    xpUpgrade(player, xp) {
        return new PlayerXpUpgrade().execute(player, xp)
    }

    cashTaxa(cash) {
        return new PlayerCashTaxa().execute(cash)
    }
}

module.exports = { PlayerController }
