const { Nexum } = require("../../index")

const storagePath = "test/storage"

test("should get all products", () => {
    const { product } = new Nexum(storagePath)

    const response = product.getAll()

    console.log(response)

    expect(response[4].name).toBe("Hilux")
})
