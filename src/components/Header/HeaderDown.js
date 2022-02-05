import React from "react"
import { Link } from "react-router-dom"

const HeaderDown = () => {
    return (
        <div className="header__down">
            <div className="container">
                <ul className="header__down-list">
                    <li className="header__down-list-item header__down-list-item--wrap">
                        <span className="header__down-list-item-link">Услуги</span>
                        <div className="header__down-list-item-submenu">
                            <ul>
                                <li className="header__down-list-item-submenu-item"><Link to="/rates/blagoystr/" className="header__down-list-item-submenu-link">Для квартир</Link></li>
                                <li className="header__down-list-item-submenu-item"><Link to="/rates/private_houses/" className="header__down-list-item-submenu-link">Для частных домов</Link></li>
                                <li className="header__down-list-item-submenu-item"><Link to="/rates/legal_persons/" className="header__down-list-item-submenu-link">Для бизнеса</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="header__down-list-item">
                        <Link to="/sales/" className="header__down-list-item-link">Акции</Link>
                    </li>
                    <li className="header__down-list-item">
                        <Link to="/cameras/" className="header__down-list-item-link">Камеры онлайн</Link>
                    </li>
                    <li className="header__down-list-item">
                        <Link to="/news/" className="header__down-list-item-link">Новости</Link>
                    </li>
                    <li className="header__down-list-item">
                        <Link to="/guide/" className="header__down-list-item-link">Справочник абонента</Link>
                    </li>
                    <li className="header__down-list-item">
                        <Link to="/about-company/" className="header__down-list-item-link">О компании</Link>
                    </li>
                    <li className="header__down-list-item">
                        <Link to="/contact/" className="header__down-list-item-link">Контакты</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderDown