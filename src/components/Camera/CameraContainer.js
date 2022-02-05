import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import compose from "../../utils/compose"
import { withRouter } from "react-router"
import Camera from "./Camera"
import hocGetData from "../../hocs/hocGetData"
import hocFetchItem from "../../hocs/hocFetchItem"
import { sole } from "../../actions/CameraActions/CameraActions"


const CameraContainer = (Wrapper) => {
    return class extends Component {

        state = {
            nameValue: "",
            phoneValue: "",
            commentValue: "",
            e: true
        }

        onInputName = (e) => {
            this.setState({
                nameValue: e.target.value
            })
        }

        onInputPhone = (e) => {
            this.setState({
                phoneValue: e.target.value
            })
        }
        
        componentDidUpdate(oweProps) {
            if (this.props.match.params.id !== oweProps.match.params.id) {
                console.log(this.props)
                this.props.sole()
            }
        }

        onInputComment = (e) => {
            this.setState({
                commentValue: e.target.value
            })
        }

        onChangeChecbox = () => {
            this.setState(({isChecked}) => {
                return {
                    isChecked: !isChecked
                }
            })
        }

        onSubmit = (e) => {
            e.preventDefault()
            console.log(e.target)
            // if (this.state.isChecked) {
            //     // fetch("")
            // }
        }

        render() {
            const {nameValue, phoneValue, commentValue, isChecked} = this.state
            return <Wrapper  nameValue={nameValue}
                            phoneValue={phoneValue}
                            commentValue={commentValue}
                            isChecked={isChecked}
                            onInputName={this.onInputName}
                            onInputPhone={this.onInputPhone}
                            onInputComment={this.onInputComment}
                            onChangeChecbox={this.onChangeChecbox}
                            onSubmit={this.onSubmit}
                            item={this.props.items}
                            itemRandom={this.props.itemRandom} />
        }
    }
}

const mapStateToProps = ({camera}) => {
    return {
        ...camera
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    const {data: {getCamera, getAllCamerasId}, match: {params: {id}}} = oweProps
    return {
        sole: sole(dispatch, () => getCamera(id),getAllCamerasId, getCamera)
    }
}


export default compose(
    withRouter,
    hocGetData,
    connect(mapStateToProps, mapDispatchToProps),
    hocFetchItem
)
(CameraContainer(Camera))



