const returnStateSliderMain = (items, isLoading, isError) => {
    return {
        items,
        isLoading,
        isError
    }
}

const sliderMainReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateSliderMain(null, true, false)
    }

    switch(actions.type) {
        case "FETCH_SLIDER_MAIN": {
            return returnStateSliderMain(null, true, false)
        }
        case "FETCH_SLIDER_MAIN_GOOD": {
            return returnStateSliderMain(actions.payload, false, false)
        }
        case "FETCH_SLIDER_MAIN_FAIL": {
            return returnStateSliderMain(null, false, true)
        }

        default: {
            return state.sliderMain
        }
    }
}

export default sliderMainReducer