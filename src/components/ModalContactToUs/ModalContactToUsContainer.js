import React from "react"
import { Component } from "react"
import ModalContactToUs from "./ModalContactToUs"
import { connect } from "react-redux"
import {modalToggle} from "../../actions/ModalContactActions/ModalContactActions"
import serializeArray from "../../utils/serializaArray"

const ModalContactToUsContainer = (Wrapper) => {
    return class extends Component {
        state = {
            name: "",
            mail: "",
            room: null,
            addres: "",
            comment: "",
            isAgree: true,
            infoItems: []
        }
        componentDidUpdate(preProps) {
            if (this.props.modalContact.itemsInput !== preProps.modalContact.itemsInput) {
                this.setState({
                    infoItems: this.props.modalContact.itemsInput
                })

            }
        }
        // componentDidMount() {
        //     console.log(this.props)
        //     debugger
        // }

        changeName = (e) => {
            this.setState({
                name: e.target.value
            })
        }

        changeMail = (e) => {
            this.setState({
                mail: e.target.value
            })
        }

        changeRoom = (e) => {
            this.setState({
                room: e.target.value
            })
        }
        changeAddres = (e) => {
            this.setState({
                addres: e.target.value
            })
        }
        changeComment = (e) => {
            this.setState({
                comment: e.target.value
            })
        }
        changeAgree = (e) => {
            this.setState(({isAgree}) => {
                return {
                    isAgree: !isAgree
                }
            })
        }


        submitForm = (e) => {
            e.preventDefault()
            if (this.state.isAgree) {
                const form = serializeArray(e.target)
                fetch('/server/', {
                method: 'POST', // or 'PUT'
                body:  JSON.stringify(form),
                }).then(function (res) {
                    return res.text();
                }).then((body)=> {
                   console.log(body)
                    this.setState({
                        name: "",
                        mail: "",
                        room: null,
                        addres: "",
                        comment: "",
                        isAgree: true
                    })
                    this.props.modalToggle([])
                 });

            }
        }

        closeModal = (e) => {
            if (e.target.classList.contains("modal-contact")) {
                this.props.modalToggle([])
            }
        }


        render() {
            const {name, mail, addres, comment, isAgree, infoItems} = this.state
            const {modalContact: {isActive}, modalToggle} = this.props
            if (isActive) {
                return <Wrapper 
                nameValue={name}
                mailValue={mail}
                addresValue={addres}
                commentValue={comment}
                isAgreeValue={isAgree}
                infoItems={infoItems}

                changeName={this.changeName}
                changeMail={this.changeMail}
                changeRoom={this.changeRoom}
                changeAddres={this.changeAddres}
                changeComment={this.changeComment}
                changeAgree={this.changeAgree}
                submitForm={this.submitForm}
                modalToggle={modalToggle}
                closeModal={this.closeModal}
                />
            } else {
                return null
            }
        }
    }
}

const mapStateToProps = ({modalContact}) => {
    return {
        modalContact
    }
}

// const mapDisptachToProps = {
//     modalToggle
// }

const mapDisptachToProps = (dispatch) => {
    return {
        modalToggle: (obj) => dispatch(modalToggle(obj))
    }
}

export default connect(mapStateToProps, mapDisptachToProps)
(ModalContactToUsContainer(ModalContactToUs)) 