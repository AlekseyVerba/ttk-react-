const returnStateNews = (items,allItems, isLoading, isError) => {
    return {
        items,
        allItems,
        isLoading,
        isError
    }
}

const newsReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateNews({},0, true, false)
    }
    switch (actions.type) {
        case "FETCH_NEWS": {
            return returnStateNews({},0, true, false)
        } 
        case "FETCH_NEWS_GOOD": {
            const allItems = actions.allItems.length
            return returnStateNews(actions.payload,allItems, false, false)
        }
        case "FETCH_NEWS_FAIL": {
            return returnStateNews({},0, false, true)
        }

        default: {
            return state.news
        }
    }
}


export default newsReducer