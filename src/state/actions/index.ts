

interface DepositAction {
    type: "deposit",
    payload :number
}

interface WithdrawlAction {
    type: "withdraw"
    payload: number
}

interface BankruptAction {
    type: "bankrupt"
}

 export type Action  = DepositAction | WithdrawlAction | BankruptAction