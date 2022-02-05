import React from "react"
import { Component } from "react"
import hocGetData from "../../hocs/hocGetData"
import hocFetchItem from "../../hocs/hocFetchItem"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import News from "./News"
import { withRouter } from "react-router"
import {sole} from "../../actions/NewsActions/NewsActions"

const NewsContainer = (Wrapper) => {
    return class extends Component {

        render() {
            let currentPage = 1
            
            if (/\d+/.exec(this.props.location.search) !== null) {
                currentPage = /\d+/.exec(this.props.location.search)
            }

            return <Wrapper items={this.props.items} currentPage={currentPage} allItems={this.props.allItems} />
        }
    }
}

const mapStateToProps = ({news}) => {
    return {
        ...news
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    let pageSearch = 1
    console.log(oweProps.location.search)
    if (oweProps.location.search !== "") {
        pageSearch = /\d+/.exec(oweProps.location.search)
    }
    return {
        sole: sole(dispatch,() => oweProps.data.getNews(pageSearch), oweProps.data.getAllNewsId)
    }
}


export default compose(
    withRouter,
    hocGetData,
    connect(mapStateToProps, mapDispatchToProps),
    hocFetchItem,
)(NewsContainer(News))

