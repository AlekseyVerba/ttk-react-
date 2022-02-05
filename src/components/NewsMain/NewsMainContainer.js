import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import hocFetchItem from "../../hocs/hocFetchItem"
import NewsMain from "./NewsMain"
import {sole} from "../../actions/NewsSmallBlockActions/NewsCmallBlockActions"

const NewsMainContainer = (Wrapper) => {
    return class extends Component {

        render() {
            return (
                <Wrapper items={this.props.items} />
            )
        }
    }
}

const mapStateToProps = (({newsSmallBlock}) => {
    return {
        ...newsSmallBlock
    }
})

const mapDispatchToProps = (dispatch, oweProps) => {
    return {
        sole: sole(dispatch, oweProps.data.getNewsFour)
    }
}

export default compose(
    hocGetData,
    connect(mapStateToProps, mapDispatchToProps),
    hocFetchItem
)(NewsMainContainer(NewsMain))