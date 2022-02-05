export const fetchSale = () => ({type: "FETCH_SALE"})
export const fetchSaleGood = (data) => ({type: "FETCH_SALE_GOOD", payload: data})
export const fetchSaleFail = () => ({type: "FETCH_SALE_FAIL"})


export const sole = (dispatch, getData) => () => {
    dispatch(fetchSale())
    getData()
        .then(data => {
            dispatch(fetchSaleGood(data))
        })
        .catch(er => {
            dispatch(fetchSaleFail())
        })
}