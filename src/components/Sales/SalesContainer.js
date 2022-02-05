import React from "react"
import { Component } from "react"
import hocFetchItem from "../../hocs/hocFetchItem"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import Sales from "./Sales"
import {sole} from "../../actions/SalesActions/SalesActions"

const SalesContainer = (Wrapper) => {
    return class extends Component {


        render() {
            
            return <Wrapper items={this.props.items} />
        }
    }
}

const mapStateToProps = ({sales}) => {
    return {
        ...sales
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    return {
        sole: sole(dispatch,oweProps.data.getSales)
    }
}


export default compose(
    hocGetData,
    connect(mapStateToProps ,mapDispatchToProps),
    hocFetchItem
)(
    SalesContainer(Sales)
)