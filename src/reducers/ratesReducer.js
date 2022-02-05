const updateState = (items, titleNames, checkbNames, isLoading, isError) => {
    return {
        items,
        titleNames,
        checkbNames,
        isLoading,
        isError
    }
}

const ratesReducer = (state, actions) => {
    if (state === undefined) {
        return updateState(null, null, null, true, false)
    }
    switch (actions.type) {
        case "FETCH_RATES": {
            return updateState(null, null, null, true, false)
        }

        case "FETCH_RATES_GOOD": {
            return updateState(actions.payload.res3, actions.payload.res1, actions.payload.res2, false, false)
        }

        case "FETCH_RATES_FAIL": {
            return updateState(null, null, null, false, true)
        }

        case "TOGGLE_ITEM": {
            const itemCurrentId = state.rates.items.findIndex(item => {
                if (item.id === actions.payload.idItem && 
                    item.rates.indexOf(actions.payload.idTitle) !== -1 && 
                    item.services.indexOf(actions.payload.idContent) !== -1
                ) 
                {
                    return item
                  
                }
            })

            const newItem = {...state.rates.items[itemCurrentId], isAdd: !state.rates.items[itemCurrentId].isAdd}
            return {
                ...state.rates,
                items: [
                    ...state.rates.items.slice(0, itemCurrentId),
                    newItem,
                    ...state.rates.items.slice(itemCurrentId+1),
                ]
            }
            // const itemIdCurrent = state.rates.
        }

        case "CLEAN_ON_ADD": {
            const itemsNew = state.rates.items.map(item => {
                if (item.rates.indexOf(actions.payload.idTitle) !== -1 &&
                    item.services.indexOf(actions.payload.idContent) !== -1) {
                        return {
                            ...item,
                            isAdd: false
                        }
                    }

                    return item
            })

            return {
                ...state.rates,
                items: itemsNew
            }
        }

        default: {
            return state.rates
        }
    }
}

export default ratesReducer