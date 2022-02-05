const nameRatedChangeId = (name) => {
    switch(name){
        case "blagoystr": {
            return 8
        }
        case "private_houses": {
            return 9
        }

        case "legal_persons": {
            return 10
        }

        default: {
            return name;
        }
    }
}

export default nameRatedChangeId