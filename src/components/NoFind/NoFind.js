import React from "react"
import { Link } from "react-router-dom"
import question from "../../assets/images/question.svg"
import "./noFind.scss"

const NoFind = () => {
    return (
        <div className="no-find">
            <div className="container">
                <div className="no-find__inner">
                    <div className="no-find__left">
                        <img src={question} alt="question" className="no-find__img"/>
                        <h3 className="no-find__text">Не нашли подходящее предложение?</h3>
                    </div>
                    <Link to="/services/" className="no-find__right">
                        Посмотреть все тарифы
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NoFind