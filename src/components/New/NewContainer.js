import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import compose from "../../utils/compose"
import { withRouter } from "react-router"
import New from "./New"
import hocGetData from "../../hocs/hocGetData"
import hocFetchItem from "../../hocs/hocFetchItem"
import {sole} from "../../actions/NewActions/NewActions"


const CameraContainer = (Wrapper) => {
    return class extends Component {

        componentDidUpdate(oweProps) {
            if (this.props.match.params.id !== oweProps.match.params.id) {
                this.props.sole()
            }
        }

        render() {
            return <Wrapper item={this.props.items} items={this.props.itemsThree}  />
        }
    }
}

const mapStateToProps = ({newItem}) => {
    return {
        ...newItem
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    const {data: {getNew, getNewThree}, match: {params: {id}}} = oweProps
    return {
        sole: sole(dispatch,() => getNew(id), getNewThree)
    }
}


export default compose(
    withRouter,
    hocGetData,
    connect(mapStateToProps, mapDispatchToProps),
    hocFetchItem
)
(CameraContainer(New))



