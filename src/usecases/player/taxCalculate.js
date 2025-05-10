class PlayerTaxCalculate {
    execute(playerInfo) {
        let taxPercentage = 0
        let cost = 0

        const tax = [
            { minimumSalary: 600, maximumSalary: 2670, percentage: 0 },
            { minimumSalary: 2641, maximumSalary: 4000, percentage: 7.5 },
            { minimumSalary: 4001, maximumSalary: 6750, percentage: 15 },
            { minimumSalary: 6751, maximumSalary: 10000, percentage: 22.5 },
            { minimumSalary: 10000, maximumSalary: 50000, percentage: 27.5 }
        ]

        for (let i = 0; i < tax.length; i++) {
            if (playerInfo.job.salary >= tax[i].minimumSalary && playerInfo.job.salary <= tax[i].maximumSalary) {
                taxPercentage = tax[i].percentage
                cost = Math.floor((taxPercentage * playerInfo.balance) / 100)
            }
        }

        return {
            cost,
            tax: taxPercentage
        }
    }
}

module.exports = { PlayerTaxCalculate }
