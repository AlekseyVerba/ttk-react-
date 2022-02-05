import React, {Component} from "react"
import Loading from "../components/Loading/Loading"
import ErrorIndicator from "../components/Error/ErrorIndicator/ErrorIndicator"

const hocFetchItem = (Wrapper) => {
    return class extends Component {

        componentDidUpdate() {
            console.log(this.props)
        }

        componentDidMount() {
            this.props.sole()
        }


        render() {
            const {isLoading, isError} = this.props
            if (isLoading) {
                return (
                    <Loading />
                )
            }

            if (isError) {
                return (
                    <ErrorIndicator  />
                )
            }
            return <Wrapper {...this.props} />
        }
    }
}

export default hocFetchItem