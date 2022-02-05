export const fetchMainButtons = () => ({type: "FETCH_MAIN_BUTTONS"})
export const fetchMainButtonsGood = (data) => ({type: "FETCH_MAIN_BUTTONS_GOOD", payload: data})
export const fetchMainButtonsFail = () => ({type: "FETCH_MAIN_BUTTONS_FAIL"})


export const sole = (dispatch, getData) => () => {
    dispatch(fetchMainButtons())
    getData()
        .then(data => {
            dispatch(fetchMainButtonsGood(data))
        })
        .catch(er => {
            dispatch(fetchMainButtonsFail())
        })
}