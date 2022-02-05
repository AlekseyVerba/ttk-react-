import { ConsumerGetData } from "../context/contextData";

const hocGetData = (Wrapper) => {
    return (props) => {
        return (
            <ConsumerGetData>
                {
                    (value) => {
                        return <Wrapper {...props} data={value} />
                    }
                }
            </ConsumerGetData>
        )
    }
}

export default hocGetData