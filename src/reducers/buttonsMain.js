
const returnStateButtonsMain = (items, isLoading, isError) => {
    return {
        items,
        isLoading,
        isError
    }
}


const buttonsMain = (state, actions) => {

    if (state === undefined) {
        return returnStateButtonsMain({}, true, false)
    }
    switch(actions.type) {
        case "FETCH_MAIN_BUTTONS": {
            return returnStateButtonsMain({}, true, false)
        }

        case "FETCH_MAIN_BUTTONS_GOOD": {
            return returnStateButtonsMain(actions.payload, false, false)
        }
        case "FETCH_MAIN_BUTTONS_FAIL": {
            return returnStateButtonsMain({}, false, true)
        }

    

        default: {
            return state.buttonsMain
        }
    }
}

export default buttonsMain