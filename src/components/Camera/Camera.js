import React from "react"
import DOMPurify from "dompurify"
import { Link } from "react-router-dom"
import brat from "../../assets/images/brat.png"
import "./Camera.scss"

const Camera = ({item, nameValue, phoneValue, commentValue, isChecked, onInputName, onInputPhone,
                onInputComment, onChangeChecbox, onSubmit, itemRandom}) => {
    
    const {title: {rendered: title}, content: {rendered: content}, acf: {url_camera}} = item
    return (
        <div className="camera page">
            <div className="container">
                <div className="camera__inner">
                   <div className="camera__left">
                        <h1 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}></h1>
                        <div className="youtube-container">
                            <iframe src={url_camera} allowFullScreen />
                        </div>
                        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}>

                        </div>
                   </div>
                   <div className="camera__right">
                        <div className="camera__item camera__item--inner">
                            <img src={brat} alt="camera" className="camera__img" /> 
                            <div className="camera__item-info">
                                <h3 className="camera__item-title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(itemRandom.title.rendered)}}></h3>
                                <Link className="camera__item-link" to={`/cameras/${itemRandom.id}`}>Подробнее</Link>
                            </div>
                        </div>
                        <div className="form-white">
                            <h3 className="form-white__title">Вы можете оставить комментарий</h3>
                            <form onSubmit={(e) => onSubmit(e)} className="form-white__form">
                                <input type="text" value={nameValue} onInput={(e) => onInputName(e)} className="form-white__input" name="name" placeholder="Ваше имя" />
                                <input type="text" value={phoneValue} onInput={(e) => onInputPhone(e)} className="form-white__input" name="phone" placeholder="+7 (___) __-__-__" />
                                <textarea name="comment" onInput={(e) => onInputComment(e)} value={commentValue} className="form-white__input form-white__input--area" placeholder="Комментарий" />
                                <label className="form-white__label">
                                    <input onChange={onChangeChecbox} type="checkbox" checked={isChecked} />
                                    Согласен(на) на обработку своих персональных данных
                                </label>
                                <button className="form-white__submit">Отправить</button>
                            </form>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Camera