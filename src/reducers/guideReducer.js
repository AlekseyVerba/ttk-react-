const returnStateGuide = (items,acfInfo, isLoading, isError) => {
    return {
        items,
        acfInfo,
        isLoading,
        isError
    }
}

const guideReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateGuide({},0, true, false)
    }
    switch (actions.type) {
        case "FETCH_GUIDE": {
            return returnStateGuide({},0, true, false)
        } 
        case "FETCH_GUIDE_GOOD": {
            return returnStateGuide(actions.payload, actions.payloadTwo, false, false)
        }
        case "FETCH_GUIDE_FAIL": {
            return returnStateGuide({},0, false, true)
        }

        default: {
            return state.guide
        }
    }
}


export default guideReducer