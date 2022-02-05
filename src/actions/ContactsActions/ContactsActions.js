export const fetchContacts = () => ({type: "FETCH_CONTACTS"})
export const fetchContactsGood = (data, coords) => ({type: "FETCH_CONTACTS_GOOD", payload: data, payloadTwo:coords})
export const fetchContactsFail = () => ({type: "FETCH_CONTACTS_FAIL"})


export const sole = (dispatch, getData, getCoordsMap) => () => {
    dispatch(fetchContacts())
    getCoordsMap()
        .then(coords => {
            getData()
            .then(data => {
                dispatch(fetchContactsGood(data, coords))
            })
            .catch(er => {
                dispatch(fetchContactsFail())
            })
        })
        .catch(er => {
            dispatch(fetchContactsFail())
        })
}