const { Nexum } = require("../../index")

const storagePath = "test/storage"

test("should get product by id", () => {
    const { product } = new Nexum(storagePath)

    const id = "05" 
    const response = product.getById(id)

    console.log(response)

    expect(response.success).toBe(true)
})
