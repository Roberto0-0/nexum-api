const { Nexum } = require("../../index")

const session = "3892939"
const storagePath = "test/storage"
let groupData = null

test("should get group by session", async () => {
    const { group } = new Nexum(storagePath)

    const getGroupBySessionService = await group.getBySession(session)

    groupData = getGroupBySessionService.data

    expect(getGroupBySessionService.success).toBe(true)
})

test("should create a player", async () => {
    const { player } = new Nexum(storagePath)

    const playerProps = {
        serialized: "2939030022@c.us",
        name: "fulano"
    }

    const createPlayerService = player.create(playerProps)
    groupData.players.push(createPlayerService)

    expect(createPlayerService.name).toBe(playerProps.name)
})

test("should save player", async () => {
    const { group } = new Nexum(storagePath)

    await group.saveChanges(session, groupData)

    expect(true).toBe(true)
})
