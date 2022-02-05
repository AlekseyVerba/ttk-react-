export const fetchGuide = () => ({type: "FETCH_GUIDE"})
export const fetchGuideGood = (data, infoAcf) => ({type: "FETCH_GUIDE_GOOD", payload: data, payloadTwo: infoAcf})
export const fetchGuideFail = () => ({type: "FETCH_GUIDE_FAIL"})


export const sole = (dispatch, getData, infoAcf) => () => {
    dispatch(fetchGuide())
    getData()
        .then(data => {
            infoAcf()
                .then(dataAcf => {
                    dispatch(fetchGuideGood(data, dataAcf))
                })
                .catch(er => {
                    dispatch(fetchGuideFail())
                })
        })
        .catch(er => {
            dispatch(fetchGuideFail())
        })
}