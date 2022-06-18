import { ActionType} from "../acttion-types"

interface DepositAction {
    type: ActionType.DEPOSIT
    payload :number
}

interface WithdrawlAction {
    type: ActionType.WITHDRAW
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

 export type Action  = DepositAction | WithdrawlAction | BankruptAction