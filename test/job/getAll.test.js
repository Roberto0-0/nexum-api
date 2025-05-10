const { Nexum } = require("../../index")

const storagePath = "test/storage"

test("should get all jobs", () => {
    const { job } = new Nexum(storagePath)

    const response = job.getAll()

    console.log(response)

    expect(response[0].id).toBe("01")
})
