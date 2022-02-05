export const fetchNewsSmallBlock = () => ({type: "FETCH_NEWS_SMALL_BLOCK"})
export const fetchNewsSmallBlockGood = (data) => ({type: "FETCH_NEWS_SMALL_BLOCK_GOOD", payload: data})
export const fetchNewsSMallBlockFail = () => ({type: "FETCH_NEWS_SMALL_BLOCK_FAIL"})

export const sole = (dispatch, getData) => () => {
    dispatch(fetchNewsSmallBlock())
    getData()
        .then(data => dispatch(fetchNewsSmallBlockGood(data)))
        .catch(er => dispatch(fetchNewsSMallBlockFail()))
}