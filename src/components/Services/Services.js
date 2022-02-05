import React from "react"
import internet from "../../assets/images/servicesImg/int.svg"
import tel from "../../assets/images/servicesImg/tel.svg"
import video from "../../assets/images/servicesImg/video.svg"
import radio from "../../assets/images/servicesImg/radio.svg"
import follow from "../../assets/images/servicesImg/follow.svg"
import { Link } from "react-router-dom"
import "./services.scss"

const Services = (props) => {
    const newItems = props.items.map(item => {
        if (item.name === "Тематическое телевиденье") {
            return null
        }

        if (item.description.split(">").length > 1) {
            item.description = item.description.split(">")[1].slice(0, item.description.split(">")[1].length - 6)
        }

        let imgitem = null;


        switch(item.name) {
            case "Интернет и ТВ": {
                imgitem = internet
                break
            }
            case "Телевидение": {
                imgitem = tel
                break
            }
            case "IP-видеонаблюдение": {
                imgitem = video
                break
            }
            case "Наше радио": {
                imgitem = radio
                break
            }
            case "Подписка на ПО": {
                imgitem = follow
                break
            }
            

            default: {
                imgitem = null
            }
        }
        const urlLink = item.link.split("ru")[1]
        return (
            <div key={item.id} className="services__item">
                <img src={imgitem} className="services__item-img" />
                <div className="services__item-info">
                    <h4 className="services__item-name">{item.name}</h4>
                    <p className="services__item-description">
                        {item.description}
                    </p>
                    <Link to={urlLink} >Подробнее</Link>
                </div>
            </div>
        )
    })
    return (
        <div className="services">
            <div className="container">
                <div className="services__inner">
                    {newItems}
                </div>
                <div className="services__wrapper-btn">
                    <button className="btn btn--order" onClick={props.modalToggle}>Подать заявку</button>
                </div>
            </div>
        </div>
    )
}

export default Services