export const fetchServices = () => ({type: "FETCH_SERVICES"})
export const fetchServicesGood = (data) => ({type: "FETCH_SERVICES_GOOD", payload: data})
export const fetchServicesFail = () => ({type: "FETCH_SERVICES_FAIL"})


export const sole = (dispatch, getData) => () => {
    dispatch(fetchServices())
    getData()
        .then(data => {
            dispatch(fetchServicesGood(data))
        })
        .catch(er => {
            dispatch(fetchServicesFail())
        })
}