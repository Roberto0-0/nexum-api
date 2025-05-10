const { ProductGetById } = require("../usecases/product/getById");
const { ProductGetAll } = require("../usecases/product/getAll");

class ProductController {
    getById(id) {
        return new ProductGetById().execute(id)
    }

    getAll() {
        return new ProductGetAll().execute()
    }
}

module.exports = { ProductController }
