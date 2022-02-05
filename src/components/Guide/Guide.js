import React from "react"
import internet from "../../assets/images/servicesImg/int.svg"
import tel from "../../assets/images/servicesImg/tel.svg"
import video from "../../assets/images/servicesImg/video.svg"
import radio from "../../assets/images/servicesImg/radio.svg"
import follow from "../../assets/images/servicesImg/follow.svg"
import DOMPurify from "dompurify"
import { Link } from "react-router-dom"
import "./Guide.scss"

const Guide = ({items, info, changeStatusAccordeon, itemActive}) => {
    const newItems = items.map(item => {
        if (item.name === "Тематическое телевиденье") {
            return null
        }

        const {content: {rendered: content}, id, title: {rendered: title} } = item

        let imgitem = null;


        switch(title) {
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
        return (
            <div key={id} className="services__item">
                <img src={imgitem} className="services__item-img" />
                <div className="services__item-info">
                    <h4 className="services__item-name">{title}</h4>
                    <p className="services__item-description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}>
                        
                    </p>
                    <Link to={`/guide/${id}`} >Подробнее</Link>
                </div>
            </div>
        )
    })


    const questionAsk = info.acf['vopros-otvet'].map((block, idx) => {
        const {vopros, otvet} = block
        console.log(idx === itemActive)
        return <div className={idx === itemActive ? "guide__question-ask guide__question-ask--active" : "guide__question-ask"} key={idx} onClick={() => changeStatusAccordeon(idx)}>
                    <p className="guide__question" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(vopros)}}></p>
                    <div className="guide__ask" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(otvet)}}></div>
                </div>
    })

    return (
        <div className="guide">
            <h1 className="title">Справочник абонента</h1>

            <div className="container">
                <div className="guide__container">
                    <div className="guide__items">
                        {newItems}
                    </div>
                    <div className="guide__questions">
                        <h2 className="title">Часто задаваемые вопросы</h2>
                        {questionAsk}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide