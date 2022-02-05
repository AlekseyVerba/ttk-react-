import React from "react"
import "./formQuestion.scss"

const formQuestion = ({inputValue, changeValue, submitForm, checkBox, changeCheckbox}) => {
    return (
        <div className="form-question">
            <div className="container">
                <div className="form-question__inner">
                    <h3 className="form-question__title">Ответим на любой вопрос!</h3>
                    <form className="form-question__form" name="form" onSubmit={(e) => submitForm(e)}>
                        <input type="hidden" name="form_title" type="hidden" value="Ответим на любой вопрос" />
                        <input placeholder="+7 (999) 000-00-00" name="phone" className="form-question__input" 
                                value={inputValue} 
                                onChange={(e) => changeValue(e.target)} />
                        <label className="form-question__label">
                            
                            <input type="checkbox" name="question" checked={checkBox} onChange={changeCheckbox} />
                            <span>Согласен на обработку своих данных</span>
                        </label>
                        <button type="submit" className="form-question__submit">Оставить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default formQuestion