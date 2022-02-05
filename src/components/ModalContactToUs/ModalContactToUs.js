import React from "react"
import "./ModalContactToUsContainer.scss"

const ModalContactToUs = ({nameValue,mailValue, addresValue,commentValue, isAgreeValue, submitForm,closeModal,
                        changeName,changeMail, changeAddres, changeComment, changeAgree, changeRoom, modalToggle,
                        infoItems}) => {
    const additionalFields = infoItems ? infoItems.map((item,idx) => {
        return <div key={item.nameCard}>
        {
            item.contentBlock ? <input type="hidden" name={`service_name-${idx}`} value={item.contentBlock} /> : null 
        }
        {
            item.titleBlock ?  <input type="hidden" name={`rates_name-${idx}`} value={item.titleBlock} /> : null
        }
        {
            item.nameCard ?  <input type="hidden" name={`name_card-${idx}`} value={item.nameCard} /> : null
        }
        {
            item.priceCard ?  <input type="hidden" name={`price_card-${idx}`} value={item.priceCard} /> : null
        }
    </div>
    }) : null
    return (
        <div className="modal-contact" onClick={closeModal}>
            <div className="modal-contact__content">
                <button className="modal-contact__close" onClick={() => modalToggle([])}>Закрыть</button>
                <h3 className="modal-contact__title">Свяжитесь с нами</h3>
                <form className="modal-contact__form" onSubmit={submitForm}>
                    <input type="hidden" name="form_title" value="Свяжитесь с нами" />
                    {additionalFields}
                    <label className="modal-contact__label">
                        Имя*<br></br>
                        <input value={nameValue} className="modal-contact__input modal-contact__input--name"
                            name="name" onChange={changeName} placeholder="Ваше имя" />
                    </label>
                    <label className="modal-contact__label">
                        Электронная почта<br></br>
                        <input value={mailValue} className="modal-contact__input modal-contact__input--mail" 
                                name="mail" onChange={changeMail} placeholder="email@domain.zone" />
                    </label>
                    <div className="modal-contact__wrapper-radios">
                        <label className="modal-contact__label">
                            <input onChange={changeRoom} value="flat" type="radio" className="modal-contact__radio" name="where" />
                            В квартиру
                        </label>
                        <label className="modal-contact__label">
                            <input onChange={changeRoom} value="office" type="radio" className="modal-contact__radio" name="where" />
                            В офис
                        </label>
                        <label className="modal-contact__label">
                            <input onChange={changeRoom} value="privateHouse" type="radio" className="modal-contact__radio" name="where" />
                            В частный дом
                        </label>
                    </div><br></br>
                    <label className="modal-contact__label">
                        Адрес*<br></br>
                        <input value={addresValue} className="modal-contact__input modal-contact__input--addres"
                         name="addres" onChange={changeAddres} placeholder="Ваше имя*" />
                    </label>
                    <label className="modal-contact__label">
                        Комментарий<br></br>
                        <textarea value={commentValue} name="comment" onChange={changeComment}
                        className="modal-contact__input modal-contact__input--textarea"/>
                    </label>
                    <label>
                        <input checked={isAgreeValue} onChange={changeAgree} type="checkbox" className="modal-content__checkbox"/>
                        Согласен(на) на обработку своих персональных данных
                    </label><br></br>
                    <button type="submit" className="button button--submit">Отправить</button>
                </form>
            </div>
        </div>
    )
}


export default ModalContactToUs