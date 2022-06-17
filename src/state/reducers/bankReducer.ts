const initialState = 0;

interface DepositAction {
    type: "deposit",
    payload? :number
}

interface WithdrawlAction {
    type: "withdraw"
    payload: number
}

interface BankruptAction {
    type: "bankrupt"
}

type Action  = DepositAction | WithdrawlAction | BankruptAction

const reducer = (state: number, action:Action) => {



switch (action.type){
    case "deposit" :
        return state + action.payload;
        case "withdraw" : 
        return state -action.payload;
        case "bankrupt" :
            return 0;
            default : 
            return state


}
}

export default reducer