import React from "react"
import "./radio.scss"

const Radio = ({changeStatusAudio, isOn, isSoundActive, toggleRegularSound, valueSound, changeValueSound}) => {
    return(
        <div className="radio">
            <div className="container">
                <div className="radio__inner">
                    <h4 className="radio__name">Наше радио</h4>
                    <div className="radio__controller">
                        <button onClick={toggleRegularSound} className="radio__sound"></button>
                        <input type="range" 
                                value={valueSound} 
                                onChange={changeValueSound} 
                                className={`radio__sound-regular ${isSoundActive ? "radio__sound-regular--active" : null}`}/>
                        <button className={`radio__on ${isOn ? "radio__on--active" : null}`} onClick={changeStatusAudio}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Radio