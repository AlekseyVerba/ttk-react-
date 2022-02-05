const returnStateAboutCompany = (items, isLoading, isError) => {
    return {
        items,
        isLoading,
        isError
    }
}

const aboutCompanyReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateAboutCompany({}, true, false)
    }
    switch (actions.type) {
        case "FETCH_ABOUT_COMPANY": {
            return returnStateAboutCompany({}, true, false)
        } 
        case "FETCH_ABOUT_COMPANY_GOOD": {
            return returnStateAboutCompany(actions.payload, false, false)
        }
        case "FETCH_ABOUT_COMPANY_FAIL": {
            return returnStateAboutCompany({}, false, true)
        }

        default: {
            return state.AboutCompany
        }
    }
}


export default aboutCompanyReducer