import React from "react"
import { Component } from "react"
import Contacts from "./Contacts"
import { connect } from "react-redux"
import hocFetchItem from "../../hocs/hocFetchItem"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import { sole } from "../../actions/ContactsActions/ContactsActions"


const ContactsContainer = (Wrapper) => {
    return class extends Component {
        render() {
            return (
                    <Wrapper info={this.props.items.acf} coords={this.props.coords.acf} />
            ) 
        }
    }
}

const mapStateToProps = ({contacts}) => {
    return {
        ...contacts
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    const {getContacts ,getCoords} = oweProps.data
    return {
        sole: sole(dispatch,getContacts, getCoords)
    }
}

export default compose(
    hocGetData,
    connect(mapStateToProps, mapDispatchToProps),
    hocFetchItem
)(ContactsContainer(Contacts))