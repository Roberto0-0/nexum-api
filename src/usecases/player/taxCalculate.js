class PlayerTaxCalculate {
    execute(salary) {
        let taxPercentage = 0

        const tax = [
            { minimumSalary: 600, maximumSalary: 2670, percentage: 0 },
            { minimumSalary: 2641, maximumSalary: 4000, percentage: 7.5 },
            { minimumSalary: 4001, maximumSalary: 6750, percentage: 15 },
            { minimumSalary: 6751, maximumSalary: 10000, percentage: 22.5 },
            { minimumSalary: 10000, maximumSalary: 50000, percentage: 27.5 }
        ]

        for (let i = 0; i < tax.length; i++) {
            if (salary >= tax[i].minimumSalary && salary <= tax[i].maximumSalary) {
                taxPercentage = tax[i].percentage
            }
        }

        return taxPercentage
    }
}

module.exports = { PlayerTaxCalculate }
