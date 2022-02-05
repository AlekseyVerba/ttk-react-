import React from "react"
import DOMPurify from "dompurify"
import "./rates.scss"

import plus from "../../assets/images/plus.svg"
import gal from "../../assets/images/gal.svg"


const RatesConstructor = ({toggleItem,items, titles, checkbox, currentId, 
                            changeCurrentIdActive,changeCheckItem, itemsChecked,
                             modalToggle, cleanOnAdd, location, isChangeMainItem, changeMainItem}) => {

    const contentTitles = titles.map((title, idx) => {
        return (
            <li key={title.id} onClick={() => changeCurrentIdActive(idx)} className={`rates__item-title ${idx === currentId ? 'rates__item-title--active' : ''}`}>
                {title.name}
            </li>
        )
    })


    const contentItems = titles.map((title,idx) => {
        // eslint-disable-next-line no-lone-blocks
        return (
            <div key={title.id} className={`rates__content-item ${idx === currentId ? "rates__content-item--active" : ""}`}>
            {
                checkbox.map(check => {
                    let checkItems = false
                    let isChecked
                    if (itemsChecked.length !== 0) {
                        isChecked = itemsChecked.filter(item => item.ratesId === title.id && item.serviceId === check.id)[0].checked
                    }
                    return (
                        <div key={check.id}>
                                <label>
                                    <input type="checkbox" checked={isChecked ? true : false} onChange={() => {changeCheckItem(title.id, check.id); cleanOnAdd(title.id, check.id)}}  />
                                    <span>{check.name}</span>
                                </label>
                            <div className={`rates__items ${isChecked ? "rates__items--active" : ""}`}>
                                
                                {items.map(item => {
                                
                                    if (item.rates.indexOf(title.id) !== -1 && 
                                    item.services.indexOf(check.id) !== -1 ) {
                                        checkItems = true
                                        const {color_card_service, period_card_service, price_card_service,
                                            speed_card_service, subtitle_card_service, text_card_service,populyarnaya} = item.acf

                                        const colorCard = color_card_service.split(":")[1]
                                        // if (+cardId === item.id && isChangeMainItem === false) {
                                        //     toggleItem(item.id, title.id, check.id)
                                        //     // changeMainItem()
                                        // }
                                        return (
                                            <div key={item.id} className={`rates__item rates__item--constructor ${populyarnaya !== undefined && populyarnaya.length !== 0 ? "rates__item--popular" : ""}`}>
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
                                                    <div className="rates__item-info" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text_card_service)}}></div>
                                                    
                                                    <button className="rates__item-toggle" onClick={() => toggleItem(item.id, title.id, check.id)}>
                                                        
                                                        {!item.isAdd ? <img src={plus} alt="plus" className="rates__item-toggle-img" /> : null }
                                                        {item.isAdd ? <img src={gal} alt="gal" className="rates__item-toggle-img" /> : null }
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    } 
                                })}

                                {checkItems === false ? <h1>Ничего не нашлось</h1> : null}
                            </div>
                        </div>
                    )
                }) 
            }
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

export default RatesConstructor