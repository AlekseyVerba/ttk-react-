import React from "react"
import { Component } from "react"
import { compose } from "redux"
import Slider from "./Slider"
import hocGetData from "../../hocs/hocGetData"
import hocFetchItem from "../../hocs/hocFetchItem"
import { connect } from "react-redux"
import {sole} from "../../actions/SliderMainActions/SliderMainActions"

const SliderContainer = (Wrapper) => {
    return class extends Component {


        render() {
            return <Wrapper items={this.props.items} />
        }

    }
}


const mapStateToProps = ({sliderMain}) => {
    return {
        ...sliderMain
    }
}

const mapDisptachToProps = (dispatch, oweProps) => {
    return {
        sole: sole(dispatch,oweProps.data.getSliderMain)
    }
}

export default compose(
    hocGetData,
    connect(mapStateToProps,mapDisptachToProps),
    hocFetchItem,
)(SliderContainer(Slider))