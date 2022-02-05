export const fetchSales = () => ({type: "FETCH_SALES"})
export const fetchSalesGood = (data) => ({type: "FETCH_SALES_GOOD", payload: data})
export const fetchSalesFail = () => ({type: "FETCH_SALES_FAIL"})


export const sole = (dispatch, getData) => () => {
    dispatch(fetchSales())
    getData()
        .then(data => {
            dispatch(fetchSalesGood(data))
        })
        .catch(er => {
            dispatch(fetchSalesFail())
        })
}