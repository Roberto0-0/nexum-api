const products = require("../../objects/products.json")

class ProductGetAll {
    execute() {
        return products
    }
}

module.exports = { ProductGetAll }
