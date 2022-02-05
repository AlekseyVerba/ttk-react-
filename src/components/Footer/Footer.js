import React from "react"
import { Link } from "react-router-dom"
import "./footer.scss"
import FooterSocial from "./FooterSocial"
import footerLogoUp from "../../assets/images/footer-logo-up.svg"
import footerLogoDown from "../../assets/images/footer-logo-down.svg"


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__inner">
                    
                    <div>
                        <img className="footer__logo-up" src={footerLogoUp}/>
                        <img className="footer__logo-down" src={footerLogoDown}/>
                    </div>
                    <ul className="footer__list footer__list--one">
                        <li className="footer__list-item">
                            <Link to="/services/">Услуги</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/sales/">Акции</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/cameras/">Камеры онлайн</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/news/">Новости</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/guide/">Справочник абонента</Link>
                        </li>
                    </ul>
                    <ul className="footer__list footer__list--two">
                        <li className="footer__list-item">
                            <Link to="/about-company/">О компании</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/contact/">Контакты</Link>
                        </li>
                    </ul>
                    <ul className="footer__list footer__list--three">
                        <li className="footer__list-item">
                            <a href="mailto:mailto:zakaz@t-tk.ru">zakaz@t-tk.ru</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="tel:+79501000979">+7 (950) 1000-979</a>
                        </li>
                        <li className="footer__list-item">
                            <address>
                            <span>Россия, Иркутская область,</span>
                            <span>г. Тулун, ул. Ленина, дом 19, кв. 23</span>
                            </address>
                        </li>
                    </ul>
                    <div className="footer__list footer__list--four">
                        <FooterSocial />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer