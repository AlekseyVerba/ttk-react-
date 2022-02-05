import React from "react"
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"
import "./Header.scss"

const HeaderUp = () => {
    return (
        <div className="header__up">
            <div className="container">
                <div className="header__up-inner">
                    <Link to="/">
                        <img src={logo} className="header__logo" alt="logo" />
                    </Link>
                    <div className="header__up-right">
                        <a href="tel:79501000979" className="header__up-right-tel">+7 (950) 1000-979</a>
                        <a href="#" className="header__lc">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.0939 23.8597C34.3544 14.2071 27.1496 -0.111102 15 0.000650206C2.85035 -0.111102 -4.35435 14.2071 2.90615 23.8597C2.96436 23.9847 3.04743 24.0964 3.15026 24.188C8.98097 31.9408 21.026 31.9338 26.8637 24.188C26.963 24.0964 27.0415 23.9844 27.0939 23.8597ZM15 2.096C24.8829 1.95631 31.2716 13.3131 26.0477 21.6526C20.3843 15.192 9.61566 15.192 3.95233 21.6526C-1.2716 13.3131 5.11708 1.95631 15 2.096ZM15 27.9387C13.1415 27.9334 11.3063 27.5248 9.62066 26.7411C7.93501 25.9573 6.439 24.8171 5.23564 23.3988C10.1178 17.413 19.9589 17.42 24.8341 23.3988C23.6231 24.826 22.1159 25.9716 20.4174 26.7557C18.719 27.5398 16.8702 27.9435 15 27.9387Z" fill="black"/>
                                <path d="M14.9994 15.3666C16.2942 15.3666 17.536 14.8515 18.4516 13.9346C19.3672 13.0177 19.8815 11.7741 19.8815 10.4774C19.6514 3.98181 10.3194 3.98181 10.1172 10.4774C10.1172 11.7741 10.6316 13.0177 11.5471 13.9346C12.4627 14.8515 13.7045 15.3666 14.9994 15.3666ZM14.9994 7.6836C15.7439 7.6836 16.4579 7.97979 16.9844 8.50701C17.5109 9.03422 17.8066 9.74928 17.8066 10.4949C17.8066 11.2405 17.5109 11.9555 16.9844 12.4827C16.4579 13.01 15.7439 13.3061 14.9994 13.3061C14.2502 13.3061 13.5317 13.0081 13.002 12.4776C12.4723 11.9471 12.1747 11.2276 12.1747 10.4774C12.1747 9.72718 12.4723 9.00769 13.002 8.4772C13.5317 7.94671 14.2502 7.64868 14.9994 7.64868V7.6836Z" fill="black"/>
                            </svg>

                        </a>
                        <a href="#" className="button button--blue">Экспресс-оплата</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderUp