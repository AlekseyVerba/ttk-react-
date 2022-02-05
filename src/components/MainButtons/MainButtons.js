import React from "react"
import "./MainButtons.scss"

const MainButtons = ({items}) => {
    console.log(items)
    const itemsReady = items.map(element => {
        const newSsyl = element.ssylka_na_knopke.split("/")
        if (newSsyl[newSsyl.length - 2] === undefined) {
            return (
                <div className="main-buttons-item" data-modal key={element.nazvanie_knopki}>
                    <img className="main-buttons-item-img" src={element.kartinka_knopki} />
                    <h4 className="main-buttons-item-name">{element.nazvanie_knopki}</h4>
                </div>
            )
        }
        return (
            <a className="main-buttons-item" href={`${newSsyl[newSsyl.length - 2]}`} key={element.nazvanie_knopki}>
                <img className="main-buttons-item-img" src={element.kartinka_knopki} />
                <h4 className="main-buttons-item-name">{element.nazvanie_knopki}</h4>
            </a>
        )
    })
    return (
        <div className="main-buttons">
            <div className="container">
                <div className="main-buttons__inner">
                    {itemsReady}
                </div>
            </div>
        </div>
    )
}

export default MainButtons