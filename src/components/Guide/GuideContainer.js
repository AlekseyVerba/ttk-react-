import React from "react"
import { Component } from "react"
import hocFetchItem from "../../hocs/hocFetchItem"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import Guide from "./Guide"
import {sole} from "../../actions/GuideActions/GuideActions"



const GuideContainer = (Wrapper) => {
    return class extends Component {

        state = {
            itemActive: null
        }

        changeStatusAccordeon = (id) => {
            this.setState(({itemActive}) => {
                if (id === itemActive) {
                    return {
                        itemActive: null
                    }
                } else {
                    return {
                        itemActive: id
                    }
                }
            })
        }

        render() {
            const {items ,acfInfo} = this.props
            const {itemActive} = this.state
             return <Wrapper items={items} 
                            info={acfInfo}
                            changeStatusAccordeon={this.changeStatusAccordeon}
                            itemActive={itemActive} />
        }
    }
}

const mapStateToProps = ({guide}) => {
    return {
        ...guide
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    const {getGuide, getGuidePage} = oweProps.data
    return {
        sole: sole(dispatch, getGuide, getGuidePage)
    }
}


export default compose(
    hocGetData,
    connect(mapStateToProps ,mapDispatchToProps),
    hocFetchItem
)(
    GuideContainer(Guide)
)