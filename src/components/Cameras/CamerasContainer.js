import React from "react"
import { Component } from "react"
import hocFetchItem from "../../hocs/hocFetchItem"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import Cameras from "./Cameras"
import {sole} from "../../actions/CamerasActions/CamerasActions"
import { withRouter } from "react-router"



const SalesContainer = (Wrapper) => {
    return class extends Component {

        componentDidUpdate(oweProps) {

            if (oweProps.location.search !== this.props.location.search) {
                this.props.sole()
            }
        }
        render() {
            let currentPage = 1
            
            if (/\d+/.exec(this.props.location.search) !== null) {
                currentPage = /\d+/.exec(this.props.location.search)
            }
            return <Wrapper items={this.props.items} currentPage={currentPage} allItems={this.props.allItems} />
        }
    }
}

const mapStateToProps = ({cameras}) => {
    return {
        ...cameras
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    let pageSearch = 1
    console.log(oweProps.location.search)
    if (oweProps.location.search !== "") {
        pageSearch = /\d+/.exec(oweProps.location.search)
    }
    console.log(pageSearch)
    return {
        sole: sole(dispatch,() => oweProps.data.getCameras(pageSearch), oweProps.data.getAllCamerasId)
    }
}


export default compose(
    withRouter,
    hocGetData,
    connect(mapStateToProps ,mapDispatchToProps),
    hocFetchItem
)(
    SalesContainer(Cameras)
)