const { Nexum } = require("../../index")

const storagePath = "test/storage"

test("should get job by id", () => {
    const { job } = new Nexum(storagePath)

    const id = "01" 
    const response = job.getById(id)

    console.log(response)

    expect(response.success).toBe(true)
})
