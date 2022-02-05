export const fetchNews = () => ({type: "FETCH_NEWS"})
export const fetchNewsGood = (data, allItems) => ({type: "FETCH_NEWS_GOOD", payload: data, allItems})
export const fetchNewsFail = () => ({type: "FETCH_NEWS_FAIL"})


export const sole = (dispatch, getData, getAllItems) => () => {
    dispatch(fetchNews())
    getAllItems()
        .then(allItems => {
            getData()
            .then(data => {
                dispatch(fetchNewsGood(data, allItems))
            })
            .catch(er => {
                dispatch(fetchNewsFail())
            })
        })
        .catch(er => {
            dispatch(fetchNewsFail())
        })
}