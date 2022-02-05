const returnStateCamera = (items,itemRandom, isLoading, isError) => {
    return {
        items,
        itemRandom,
        isLoading,
        isError
    }
}

const cameraReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateCamera({},{}, true, false)
    }
    switch (actions.type) {
        case "FETCH_CAMERA": {
            return returnStateCamera({},{}, true, false)
        } 
        case "FETCH_CAMERA_GOOD": {
            return returnStateCamera(actions.payload,actions.payloadTwo , false, false)
        }
        case "FETCH_CAMERA_FAIL": {
            return returnStateCamera({},{}, false, true)
        }

        default: {
            return state.camera
        }
    }
}


export default cameraReducer