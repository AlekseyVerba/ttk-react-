import React from "react"
import { Component } from "react"
import RatesConstructor from "./RatesConstructor"
import { connect } from "react-redux"
import compose from "../../utils/compose"
import { withRouter } from "react-router"
import {toggleItem} from "../../actions/RatesActions/RatesActions"
import {cleanOnAdd} from "../../actions/RatesActions/RatesActions"

const RatesConstructorContainer = (Wrapper) => {
    return class extends Component {
        state = {
            isChangeMainItem: false
        }

        changeMainItem = () => {
            this.setState({
                isChangeMainItem: true
            })
        }

        componentDidMount() {
            const splitLocation = this.props.location.search.split("&")
            const cardId = splitLocation[0].split("=")[1]
            const titleId = splitLocation[1].split("=")[1]
            const checkId = splitLocation[2].split("=")[1]
            this.props.titles.forEach((title,idx) => {
                if (title.id === +titleId) {
                    this.props.changeCurrentIdActive(idx)
                }
                this.props.checkbox.forEach(check => {
                    // if (+checkId === check.id && title.id === +titleId) {
                    //     // debugger
                    //     setTimeout(() => {
                    //         this.props.changeCheckItem(title.id, check.id)
                    //     }, 1000)
                    // }
                    this.props.items.forEach(item => {
                        if (item.id === +cardId && +titleId === title.id && +checkId === check.id) {
                            console.log(item)
                            this.props.toggleItem(item.id, title.id, check.id)
                        }
                    })
                })
            })
        }

        render() {
            return <Wrapper {...this.props} isChangeMainItem={this.state.isChangeMainItem} changeMainItem={this.changeMainItem} />
        }
    }
}

const mapDispatchToProps = {
    toggleItem,
    cleanOnAdd
}

export default compose(
    withRouter,
    connect(null, mapDispatchToProps),
    RatesConstructorContainer
)(RatesConstructor)

