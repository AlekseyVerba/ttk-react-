import React from "react"
import { Component } from "react"
import compose from "../../utils/compose"
import Sale from "./Sale"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import hocFetchItem from "../../hocs/hocFetchItem"
import hocGetData from "../../hocs/hocGetData"
import {sole} from "../../actions/SaleActions/SaleActions"

const SaleContainer = (Wrapper) => {
    return class extends Component {
        render() {
            return <Wrapper item={this.props.items} />
        }
    }
}

const mapStateToProps = ({sale}) => {
    return {
        ...sale
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    const {data: {getSale}, match: {params: {id}}} = oweProps
    return {
        sole: sole(dispatch, () => getSale(id))
    }
}

export default compose(
    hocGetData,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    hocFetchItem
)(
    SaleContainer(Sale)
)
