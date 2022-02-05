const returnStateNew = (items,itemsThree, isLoading, isError) => {
    return {
        items,
        itemsThree,
        isLoading,
        isError
    }
}

const newReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateNew({},{}, true, false)
    }
    switch (actions.type) {
        case "FETCH_NEW": {
            return returnStateNew({},{}, true, false)
        } 
        case "FETCH_NEW_GOOD": {
            return returnStateNew(actions.payload,actions.payloadTwo , false, false)
        }
        case "FETCH_NEW_FAIL": {
            return returnStateNew({},{}, false, true)
        }

        default: {
            return state.newItem
        }
    }
}


export default newReducer