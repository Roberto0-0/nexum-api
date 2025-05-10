class Player {
    constructor(serialized, name) {
        this.serialized = serialized
        this.name = name
        this.level = 1
        this.xp = 0
        this.requiredXp = this.requiredXpCalculate(this.level)
        this.balance = 0
        this.bank = 0
        this.job = { name: "𝐃𝐞𝐬𝐞𝐦𝐩𝐫𝐞𝐠𝐚𝐝𝐨(𝐚)", salary: 600 }
        this.itens = []
        this.heritage = 0
        this.timestamps = {
            nextWork: Date.now(),
            nextBuy: Date.now(),
            nextTax: this.setTaxTime(),
            nextSlot: Date.now(),
            nextDeposit: Date.now()
        }
        this.isAdmin = false
        this.createdAt = Date.now()
        this.updatedAt = Date.now()
    }

    requiredXpCalculate(level) {
        return Math.floor(Math.pow(level, 2) * 10)
    }

    setTaxTime() {
        let nextTax = new Date();
        nextTax.setDate(nextTax.getDate() + 1)
        return nextTax.getTime()
    }
}

module.exports = { Player }
