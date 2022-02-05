export const fetchNew = () => ({type: "FETCH_NEW"})
export const fetchNewGood = (data,dataTwo) => ({type: "FETCH_NEW_GOOD", payload: data, payloadTwo: dataTwo})
export const fetchNewFail = () => ({type: "FETCH_NEW_FAIL"})


export const sole = (dispatch, getData, getThreeItems) => () => {
    dispatch(fetchNew())
    getData()
        .then(data => {
            getThreeItems()
                .then(dataTwo => {
                    dispatch(fetchNewGood(data, dataTwo))
                })
                .catch(er => {
                    dispatch(fetchNewFail())
                })
        })
        .catch(er => {
            dispatch(fetchNewFail())
        })
}