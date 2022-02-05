import React from "react"
import DOMPurify from "dompurify"
import FooterSocial from "../Footer/FooterSocial"
import "./Contacts.scss"
import { YMaps, Map } from 'react-yandex-maps';
import FormQuestion from "../FormQuestion/FormQuestionContainer";

const Contacts = ({info, coords}) => {
    const coordsArr = coords.koordinaty_karty.split(", ")
    return (
        <YMaps>
                <div className="contacts">
                    <div className="container">
                        <h1 className="title">Контакты</h1>
                        <div className="contacts__block">
                            <div className="contacts__left">
                                <h3 className="contacts__block-title">Тулун-ТелеКом</h3>
                                <ul className="contacts__list">
                                    <li className="contacts__list-item">
                                        {info.pochtovyj_adress}
                                    </li>
                                    <li className="contacts__list-item">
                                        {info.nomer_telefona}
                                    </li>
                                    <li className="contacts__list-item" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(info.podrobnyj_adres)}}>

                                    </li>
                                </ul>
                                <FooterSocial />
                            </div>
                            <div className="contacts__right">
                                <div className="contacts__map">
                                    <Map className="contacts__map-item" defaultState={{ center: coordsArr, zoom: coords.masshtab_karty_zoom }} />
                                </div>
                                
                            </div>
                        </div>
                        <FormQuestion />
                    </div>
                </div>
        </YMaps>

    )
}


export default Contacts