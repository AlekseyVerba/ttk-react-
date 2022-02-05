import React from "react"
import { Component } from "react"
import formQuestion from "./FormQuestion"
import serializeArray from "../../utils/serializaArray"

const FormQuestionContainer = (Wrapper) => {
    return class extends Component {
        
        state = {
            value: "",
            isChecked: true
        }

        changeValue = (e) => {
            this.setState({
                value: e.value
            })
        }

        changeCheckbox = () => {
            this.setState(({isChecked}) => {
                return {
                    isChecked: !isChecked
                }
            })
        }
        submitForm = (e) => {
            e.preventDefault()
            if (this.state.isChecked) {

                    const form = serializeArray(e.target)
                    fetch('/server/', {
                    method: 'POST', // or 'PUT'
                    body:  JSON.stringify(form),
                    }).then(function (res) {
                        return res.text();
                    }).then((body)=> {
                       console.log(body)

                     });
    
            }
        }

        render() {
            return <Wrapper inputValue={this.state.value} 
                            submitForm={this.submitForm}
                            changeValue={this.changeValue}
                            checkBox={this.state.isChecked}
                            changeCheckbox={this.changeCheckbox}
                            />
        }
    }
}

export default FormQuestionContainer(formQuestion)