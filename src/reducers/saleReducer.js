const returnStateSale = (items, isLoading, isError) => {
    return {
        items,
        isLoading,
        isError
    }
}

const saleReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateSale({}, true, false)
    }
    switch (actions.type) {
        case "FETCH_SALE": {
            return returnStateSale({}, true, false)
        } 
        case "FETCH_SALE_GOOD": {
            return returnStateSale(actions.payload, false, false)
        }
        case "FETCH_SALE_FAIL": {
            return returnStateSale({}, false, true)
        }

        default: {
            return state.sale
        }
    }
}


export default saleReducer