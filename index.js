const { GroupController } = require("./src/controlles/groupController")

class Nexum {
    constructor(storagePath) {
        this.storage = storagePath
        this.group = new GroupController(this.storage)
    }
}

module.exports = { Nexum }
