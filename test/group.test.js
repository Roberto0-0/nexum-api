const { Nexum } = require("../index")

const session = "3892939"
const storagePath = "test/storage"
let groupData = null

test("should get group by session", async () => {
    const { group } = new Nexum(storagePath)

    const getGroupBySessionService = await group.getBySession(session)

    expect(getGroupBySessionService.success).toBe(false)
})

test("should create a group", async () => {
    const { group } = new Nexum(storagePath)

    const groupProps = {
        session,
        name: "nexum"
    }

    const createGroupService = group.create(groupProps)

    groupData = createGroupService

    expect(createGroupService.name).toBe("nexum")
})

test("should save group", async () => {
    const { group } = new Nexum(storagePath)

    await group.saveChanges(session, groupData)

    expect(true).toBe(true)
})
