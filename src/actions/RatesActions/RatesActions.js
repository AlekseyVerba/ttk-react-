export const fetchRates = () => ({type: "FETCH_RATES"})
export const fetchRatesGood = (data) => ({type: "FETCH_RATES_GOOD", payload: data})
export const fetchRatesFail = () => ({type: "FETCH_RATES_FAIL"})
export const toggleItem = (idItem, idTitle, idContent) => ({type: "TOGGLE_ITEM", payload: {idItem, idTitle, idContent}})
export const cleanOnAdd = (idTitle, idContent) => ({type: "CLEAN_ON_ADD", payload: {idTitle, idContent}})

export const sole = (dispatch, getData) => () => {
    dispatch(fetchRates())
    getData()
        .then(data => dispatch(fetchRatesGood(data)))
        .catch(er => dispatch(fetchRatesFail()))
}