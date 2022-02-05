import React, { Component } from "react"
import { connect } from "react-redux"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import MainButtons from "./MainButtons"
import {sole} from "../../actions/MainButtonsActions/MainButtonsActions"
import Loading from "../Loading/Loading"
import ErrorIndicator from "../Error/ErrorIndicator/ErrorIndicator"

const MainButtonsContainer = (Wrapper) => {
    return class extends Component {

        componentDidMount() {
            this.props.sole()
        }


        render() {
            const {items,isLoading, isError} = this.props.buttonsMain

            if (isLoading) {
                return (
                    <Loading />
                )
            }

            if (isError) {
                return (
                    <ErrorIndicator />
                )
            }

            return <Wrapper items={items} />
        }
    }
}

const mapStateToProps = ({buttonsMain}) => {
    return {
        buttonsMain
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sole: sole(dispatch,ownProps.data.getButtonsMain)
    }
}

export default compose(
    hocGetData,
    connect(mapStateToProps, mapDispatchToProps),
    MainButtonsContainer
)(MainButtons)