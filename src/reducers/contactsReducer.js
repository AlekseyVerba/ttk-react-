const returnStateContacts = (items,coords, isLoading, isError) => {
    return {
        items,
        coords,
        isLoading,
        isError
    }
}

const contactsReducer = (state, actions) => {
    if (state === undefined) {
        return returnStateContacts({},0, true, false)
    }
    switch (actions.type) {
        case "FETCH_CONTACTS": {
            return returnStateContacts({},0, true, false)
        } 
        case "FETCH_CONTACTS_GOOD": {
            return returnStateContacts(actions.payload,actions.payloadTwo, false, false)
        }
        case "FETCH_CONTACTS_FAIL": {
            return returnStateContacts({},0, false, true)
        }

        default: {
            return state.contacts
        }
    }
}


export default contactsReducer