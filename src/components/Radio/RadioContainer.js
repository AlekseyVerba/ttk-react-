import React from "react"
import { Component } from "react"
import Radio from "./Radio"

const RadioContainer = (Wrapper) => {
    return class extends Component {


        state = {
            isOn: false,
            isSoundActive: false,
            valueSound: 50
        }

        audio = new Audio("https://nashe1.hostingradio.ru:80/nashe-128.mp3")

        componentDidMount() {
            this.audio.volume = +this.state.valueSound/100
        }
        
        

        changeStatusAudio = () => {
            this.setState(({isOn}) => {
                !this.state.isOn ? this.audio.play() : this.audio.pause()
                return {
                    isOn: !isOn
                }
            })
        }

        changeValueSound = (e) => {
            this.setState({
                valueSound: e.target.value
            })
            console.log(+`0.${e.target.value}`)
            this.audio.volume = +this.state.valueSound/100
        }

        toggleRegularSound = () => {
            this.setState(({isSoundActive}) => {
                return {
                    isSoundActive: !isSoundActive
                }
            })
        }



        render() {
            const {isOn, isSoundActive, valueSound} = this.state
            return(
                <Wrapper isOn={isOn}
                         isSoundActive={isSoundActive}
                         changeStatusAudio={this.changeStatusAudio}
                         toggleRegularSound={this.toggleRegularSound}
                         changeValueSound={this.changeValueSound}
                         valueSound={valueSound}
                         />
            )
        }
    }
}


export default RadioContainer(Radio)

