import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import {sole} from "../../actions/ServicesActions/ServicesActions"
import Services from "./Services"
import hocFetchItem from "../../hocs/hocFetchItem"
import {modalToggle} from "../../actions/ModalContactActions/ModalContactActions"


const ServicesContainer = (Wrapper) => {
    return class extends Component {


        render() {
            
            return (
                <Wrapper items={this.props.items} modalToggle={this.props.modalToggle} />
            )
        }
    }
}

const mapStateToProps = ({services}) => {
    return {
        ...services
    }
}

const dispatchToProps = (dispatch, ownProps) => {
    return {
        sole: sole(dispatch,ownProps.data.getServices),
        modalToggle: () => dispatch(modalToggle())
    }
}

export default compose(
    hocGetData,
    connect(mapStateToProps, dispatchToProps),
    hocFetchItem
)(ServicesContainer(Services))

