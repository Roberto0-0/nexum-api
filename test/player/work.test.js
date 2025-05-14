const { Nexum } = require("../../index")

const storagePath = "test/storage/"

test("should work", () => {
    const { player } = new Nexum(storagePath)   

    const jobId = "01"

    const workedResponse = player.work(jobId) 
    console.log(workedResponse)

    expect(workedResponse.salary).toBe(500)
})
