export const fetchAboutCompany = () => ({type: "FETCH_ABOUT_COMPANY"})
export const fetchAboutCompanyGood = (data) => ({type: "FETCH_ABOUT_COMPANY_GOOD", payload: data})
export const fetchAboutCompanyFail = () => ({type: "FETCH_ABOUT_COMPANY_FAIL"})


export const sole = (dispatch, getData) => () => {
    dispatch(fetchAboutCompany())
    getData()
        .then(data => {
            dispatch(fetchAboutCompanyGood(data))
        })
        .catch(er => {
            dispatch(fetchAboutCompanyFail())
        })
}