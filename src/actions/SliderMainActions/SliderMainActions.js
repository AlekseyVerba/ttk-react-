export const fetchSlider = () => ({type: "FETCH_SLIDER_MAIN"})
export const fetchSliderGood = (data) => ({type: "FETCH_SLIDER_MAIN_GOOD", payload: data})
export const fetchSliderFail = () => ({type: "FETCH_SLIDER_MAIN_FAIL"})


export const sole = (dispatch, getData) => () => {
    dispatch(fetchSlider())
    getData()
        .then(data => {
            dispatch(fetchSliderGood(data))
        })
        .catch(er => {
            dispatch(fetchSliderFail())
        })
}