const returnStateSales = (items, isLoading, isError) => {
    return {
        items,
        isLoading,
        isError
    }
}

const salesReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateSales({}, true, false)
    }
    switch (actions.type) {
        case "FETCH_SALES": {
            return returnStateSales({}, true, false)
        } 
        case "FETCH_SALES_GOOD": {
            return returnStateSales(actions.payload, false, false)
        }
        case "FETCH_SALES_FAIL": {
            return returnStateSales({}, false, true)
        }

        default: {
            return state.sales
        }
    }
}


export default salesReducer