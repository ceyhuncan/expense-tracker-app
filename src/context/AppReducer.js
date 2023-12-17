export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state, // spread opeartor to get initial transaction
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}