

const modalContactReducer = (state, actions) => {
    if (state === undefined) {
        return {
            isActive: false,
            itemsInput: []

        }
    }
    
    switch (actions.type) {
        case "MODAL_TOGGLE": {
            return {
                isActive: !state.modalContact.isActive,
                itemsInput: actions.payload

            }
        }

        default: {
            return state.modalContact
        }
    }
}


export default modalContactReducer