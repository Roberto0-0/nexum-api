const products = require("../../objects/products.json")

class ProductGetById {
    execute(id) {
        const product = products.find(x => x.id === id)
        if (!product) return {
            success: false,
        }

        return {
            success: true,
            data: product
        }
    }
}

module.exports = { ProductGetById }
