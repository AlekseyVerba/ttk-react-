import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import hocFetchItem from "../../hocs/hocFetchItem"
import {sole} from "../../actions/RatesActions/RatesActions"
import {modalToggle} from "../../actions/ModalContactActions/ModalContactActions"
import { withRouter } from "react-router"

const RatesContainer = () => {
    return class extends Component {

        state = {
            curentIdActive: 0,
            itemsChecked: []
        }

        changeCurrentIdActive = (id) => {
            this.setState({
                curentIdActive: id
            })
        }

        componentDidMount() {
            // console.log(this.props.titleNames.length * this.props.checkbNames.length)
            const itemsTitle = []
            this.props.titleNames.forEach(title => {
                this.props.checkbNames.forEach(check => {
                    let isChecked
                    if (check.name === "Интернет и ТВ") {
                        isChecked = true
                    } else {
                        isChecked = false
                    }
                    const newObj = {
                        ratesId: title.id,
                        serviceId: check.id,
                        checked: isChecked
                    }
                    itemsTitle.push(newObj)
                })
            })
            this.setState({
                itemsChecked: itemsTitle
            })
        }


        changeCheckItem = (ratesId, serviceId) => {
            const idx = this.state.itemsChecked.findIndex(item => item.ratesId === ratesId && item.serviceId === serviceId)
            const updateEl = {
                ratesId: this.state.itemsChecked[idx].ratesId,
                serviceId: this.state.itemsChecked[idx].serviceId,
                checked: !this.state.itemsChecked[idx].checked
            }
            this.setState(({itemsChecked}) => {
                return {itemsChecked : [
                    ...itemsChecked.slice(0,idx),
                    updateEl,
                    ...itemsChecked.slice(idx + 1)
                ]}
            })
        }


        render() {
            const {checkbNames, items, titleNames, modalToggle, Wrapper, match: {params: id}} = this.props
            return <Wrapper 
                        titles={titleNames} 
                        currentId={this.state.curentIdActive} 
                        changeCurrentIdActive={this.changeCurrentIdActive} 
                        checkbox={checkbNames} 
                        items={items} 
                        itemsChecked={this.state.itemsChecked}
                        changeCheckItem={this.changeCheckItem}
                        modalToggle={modalToggle}
                        tarifName={id.id}
                    />
        }
    }
}


const mapStateToProps = ({rates}) => {
    return {
        ...rates
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    return {
        sole: sole (dispatch, oweProps.data.getRates),
        modalToggle: (obj) => dispatch(modalToggle(obj))
    }
}

export default compose(
    withRouter,
    hocGetData,
    connect(mapStateToProps, mapDispatchToProps),
    hocFetchItem
)(RatesContainer())


