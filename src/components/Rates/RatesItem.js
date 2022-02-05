import React from "react"
import DOMPurify from "dompurify"
import { Link } from "react-router-dom"
import "./rates.scss"
import nameRatedChangeId from "../../utils/nameRatedChangeId"


const RatesMain = (props) => {
    const {checkbox, changeCurrentIdActive, currentId, items,modalToggle, tarifName} = props
    const contentTitles = checkbox.map((title, idx) => {
        return (
            <li key={title.id} onClick={() => changeCurrentIdActive(idx)} className={`rates__item-title ${idx === currentId ? 'rates__item-title--active' : ''}`}>
                {title.name}
            </li>
        )
    })
    const tarifId = nameRatedChangeId(tarifName);
    const contentItems = checkbox.map((check,idx) => {
        // eslint-disable-next-line no-lone-blocks
        return (
            <div key={check.id} className={`rates__content-item rates__content-item--item ${idx === currentId ? "rates__content-item--active rates__content-item--item--active" : ""}`}>
                                                {items.map(item => {
                                
                                if (
                                item.services.indexOf(check.id) !== -1 &&
                                 item.rates.indexOf(tarifId) !== -1) {
                                     console.log(check.id)
                                     console.log(tarifId)
                                     console.log(item)
                                    const {color_card_service, period_card_service, price_card_service,
                                        speed_card_service, subtitle_card_service, text_card_service,populyarnaya} = item.acf

                                    const colorCard = color_card_service.split(":")[1]
                                    return (
                                        <div key={item.id} className={`rates__item ${populyarnaya !== undefined && populyarnaya.length !== 0 ? "rates__item--popular" : ""}`}>
                                            <div className="rates__item-header" style={{opacity: colorCard}}>
                                                {item.title.rendered}
                                            </div>
                                            <div className="rates__item-body">
                                                <div className="rates__item-subtitle">
                                                    {subtitle_card_service}
                                                </div>
                                           
                                                    {  
                                                        price_card_service ? 
                                                        <div className="rates__item-price">
                                                            <span className="rates__item-price-current">{price_card_service}₽</span>
                                                            <span className="rates__item-total">{period_card_service}</span>
                                                        </div> 
                                                    : null 
                                                    }
                                                    
                                                
                                                <div className="rates__item-speed">{speed_card_service}</div>
                                                <div className="rates__item-info" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text_card_service)}}>
                                                    
                                                </div>
                                                <div className="rates__item-footer">
                                                    <Link to={`/constructor/?service-id=${item.id}&category=${"1"}&content=${check.id}`} className="rates__item-footer-link" >Настроить тариф</Link>
                                                    <button onClick={() => modalToggle([{titleBlock: tarifName, 
                                                                                        contentBlock: check.name, 
                                                                                        nameCard: item.title.rendered,
                                                                                        priceCard: price_card_service ? price_card_service : null}])} className="rates__item-button">Оставить заявку</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } 
                            })}
            </div>
        ) 
    })

    return (
        <div className="rates">
            <div className="container">
                <div className="rates__inner">
                    <ul className="rates__list">
                        {contentTitles}
                    </ul>
                    <div className="rates__wrapper-content">
                        {contentItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatesMain