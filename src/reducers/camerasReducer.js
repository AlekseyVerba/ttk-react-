const returnStateCameras = (items,allItems, isLoading, isError) => {
    return {
        items,
        allItems,
        isLoading,
        isError
    }
}

const camerasReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateCameras({},0, true, false)
    }
    switch (actions.type) {
        case "FETCH_CAMERAS": {
            return returnStateCameras({},0, true, false)
        } 
        case "FETCH_CAMERAS_GOOD": {
            const allItems = actions.allItems.length
            return returnStateCameras(actions.payload,allItems, false, false)
        }
        case "FETCH_CAMERAS_FAIL": {
            return returnStateCameras({},0, false, true)
        }

        default: {
            return state.cameras
        }
    }
}


export default camerasReducer