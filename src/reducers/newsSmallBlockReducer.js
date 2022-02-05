const returnStateNewsSmallBlock = (items, isLoading, isError) => {
    return {
        items,
        isLoading,
        isError
    }
}

const newsSmallBlockReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateNewsSmallBlock({}, true, false)
    }
    switch (actions.type) {
        case "FETCH_NEWS_SMALL_BLOCK": {
            return returnStateNewsSmallBlock({}, true, false)
        } 
        case "FETCH_NEWS_SMALL_BLOCK_GOOD": {
            return returnStateNewsSmallBlock(actions.payload, false, false)
        }
        case "FETCH_NEWS_SMALL_BLOCK_FAIL": {
            return returnStateNewsSmallBlock({}, false, true)
        }

        default: {
            return state.newsSmallBlock
        }
    }
}


export default newsSmallBlockReducer