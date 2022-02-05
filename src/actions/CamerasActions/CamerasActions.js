export const fetchCameras = () => ({type: "FETCH_CAMERAS"})
export const fetchCamerasGood = (data, allItems) => ({type: "FETCH_CAMERAS_GOOD", payload: data, allItems})
export const fetchCamerasFail = () => ({type: "FETCH_CAMERAS_FAIL"})


export const sole = (dispatch, getData, getAllItems) => () => {
    dispatch(fetchCameras())
    getAllItems()
        .then(allItems => {
            getData()
            .then(data => {
                dispatch(fetchCamerasGood(data, allItems))
            })
            .catch(er => {
                dispatch(fetchCamerasFail())
            })
        })
        .catch(er => {
            dispatch(fetchCamerasFail())
        })
}