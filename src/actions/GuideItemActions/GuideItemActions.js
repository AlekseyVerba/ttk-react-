export const fetchGuideItem = () => ({type: "FETCH_GUIDE_ITEM"})
export const fetchGuideItemGood = (data) => ({type: "FETCH_GUIDE_ITEM_GOOD", payload: data})
export const fetchGuideItemFail = () => ({type: "FETCH_GUIDE_ITEM_FAIL"})


export const sole = (dispatch, getData) => () => {
    dispatch(fetchGuideItem())
    getData()
        .then(data => {
            dispatch(fetchGuideItemGood(data))
        })
        .catch(er => {
            dispatch(fetchGuideItemFail())
        })
}