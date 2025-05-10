const { GroupController } = require("./src/controlles/groupController")
const { PlayerController } = require("./src/controlles/playerController")
const { JobController } = require("./src/controlles/jobController")
const { ProductController } = require("./src/controlles/productController")

class Nexum {
    constructor(storagePath) {
        this.storage = storagePath
        this.group = new GroupController(this.storage)
        this.player = new PlayerController(this.storage)
        this.job = new JobController()
        this.product = new ProductController()
    }
}

module.exports = { Nexum }
