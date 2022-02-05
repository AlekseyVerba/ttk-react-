const returnStateGuideItem = (items, isLoading, isError) => {
    return {
        items,
        isLoading,
        isError
    }
}

const guideItemReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateGuideItem({}, true, false)
    }
    switch (actions.type) {
        case "FETCH_GUIDE_ITEM": {
            return returnStateGuideItem({}, true, false)
        } 
        case "FETCH_GUIDE_ITEM_GOOD": {
            return returnStateGuideItem(actions.payload, false, false)
        }
        case "FETCH_GUIDE_ITEM_FAIL": {
            return returnStateGuideItem({}, false, true)
        }

        default: {
            return state.guideItem
        }
    }
}


export default guideItemReducer