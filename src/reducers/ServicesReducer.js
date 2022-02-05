const returnStateServices = (items, isLoading, isError) => {
    return {
        items,
        isLoading,
        isError
    }
}

const servicesReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateServices({}, true, false)
    }
    switch (actions.type) {
        case "FETCH_SERVICES": {
            return returnStateServices({}, true, false)
        } 
        case "FETCH_SERVICES_GOOD": {
            return returnStateServices(actions.payload, false, false)
        }
        case "FETCH_SERVICES_FAIL": {
            return returnStateServices({}, false, true)
        }

        default: {
            return state.services
        }
    }
}


export default servicesReducer