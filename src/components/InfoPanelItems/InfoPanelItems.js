import React from "react"
import "./infoPanelItems.scss"

const InfoPanelItems = ({items, modalToggle}) => {
    if (items === null) {
        items = []
    }
    let sumOfMoney = 0
    const itemsList = items.map(item => {
        if(item.isAdd) {
            const {title: {rendered:name}, acf: {price_card_service:price}} = item
            sumOfMoney += +price
            return (
                <li key={item.id} className="info-panel__left-list-item">
                    <span className="info-panel__left-list-item-name">{name}</span>
                    <span className="info-panel__left-list-item-price">{price} ₽</span>
                </li>
            )
        }
    })

    const modalInfo = items.filter((item) => item.isAdd === true).map(item => {
            return {
                contentBlock: item.services[0],
                titleBlock: item.rates[0],
                nameCard: item.title ? item.title.rendered : null,
                priceCard: item.acf.price_card_service ? item.acf.price_card_service : null
            }
    })

    // let sumOfMoney = items.f

    return (
        <div className="info-panel">
            <div className="container">
                <div className="info-panel__inner">
                    <div className="info-panel__left">
                        <div className="info-panel__left-titles">
                            <h4 className="info-panel__left-title">
                                Наименование услуги
                            </h4>

                            <h4 className="info-panel__left-title">
                                Стоимость
                            </h4>
                        </div>
                        <ul className="info-panel__left-list">
                            {itemsList}
                        </ul>
                    </div>
                    <div className="info-panel__right">
                        <h3 className="info-panel__right-title">Итого</h3>
                        <ul className="info-panel__right-list">
                            <li className="info-panel__right-list-item">
                                <span className="info-panel__right-list-item-when">Помесячная оплата:</span>
                                <span className="info-panel__right-list-item-price">{sumOfMoney} ₽</span>
                            </li>
                        </ul>
                        <button onClick={() => modalToggle(modalInfo)} className="info-panel__send">Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPanelItems