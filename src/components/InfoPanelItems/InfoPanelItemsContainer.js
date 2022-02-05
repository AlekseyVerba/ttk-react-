import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import compose from "../../utils/compose"
import InfoPanelItems from "./InfoPanelItems"
import {modalToggle} from "../../actions/ModalContactActions/ModalContactActions"


const InfoPanelItemsContainer = (Wrapper) => {
    return class extends Component {


        render() {
            return (
                <Wrapper items={this.props.items} modalToggle={this.props.modalToggle} />
            )
        }
    }
}

const mapStateToProps = ({rates: {items}}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    modalToggle
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    InfoPanelItemsContainer
)(InfoPanelItems)