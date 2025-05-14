const { PlayerCreate } = require("../usecases/player/create")
const { PlayerXpUpgrade } = require("../usecases/player/xpUpgrade")
const { PlayerCashTaxa } = require("../usecases/player/cashTaxa")
const { PlayerTaxCalculate } = require("../usecases/player/taxCalculate")
const { PlayerWork } = require("../usecases/player/work")

const path = require("node:path")

class PlayerController {
    constructor(storagePath) {
        this.storage = path.join(process.cwd(), `${storagePath}/nexum_storage`)
    }

    create(playerProps) {
        return new PlayerCreate().execute(playerProps)
    }

    xpUpgrade(player, xp) {
        return new PlayerXpUpgrade().execute(player, xp)
    }

    cashTaxa(cash) {
        return new PlayerCashTaxa().execute(cash)
    }

    taxCalculate(playerInfo) {
        return new PlayerTaxCalculate().execute(playerInfo)
    }

    work(jobId) {
        return new PlayerWork().execute(jobId)
    }
} 

module.exports = { PlayerController }
