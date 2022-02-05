import getRandomInt from "../../utils/randomNum"

export const fetchCamera = () => ({type: "FETCH_CAMERA"})
export const fetchCameraGood = (data,dataTwo) => ({type: "FETCH_CAMERA_GOOD", payload: data, payloadTwo: dataTwo})
export const fetchCameraFail = () => ({type: "FETCH_CAMERA_FAIL"})


export const sole = (dispatch, getData, getAllItems, getDataTwo) => () => {
    dispatch(fetchCamera())
    getAllItems()
        .then(data => {
            const idItemCurrent = data.length
            const randCamera = getRandomInt(idItemCurrent)
            const idCurrent = data[randCamera - 1].id
            getData()
                .then(dataTwo => {
                    getDataTwo(idCurrent)
                    .then(dataThree => {
                        dispatch(fetchCameraGood(dataTwo, dataThree))
                    })
                    .catch(er => {
                        dispatch(fetchCameraFail())
                    })
                })
                .catch(er => {
                    dispatch(fetchCameraFail())
                })
        })
        .catch(er => {
            dispatch(fetchCameraFail())
        })
}