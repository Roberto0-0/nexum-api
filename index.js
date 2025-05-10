const { GroupController } = require("./src/controlles/groupController")
const { PlayerController } = require("./src/controlles/playerController")

class Nexum {
    constructor(storagePath) {
        this.storage = storagePath
        this.group = new GroupController(this.storage)
        this.player = new PlayerController(this.storage)
    }
}

module.exports = { Nexum }
