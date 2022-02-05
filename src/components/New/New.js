import React from "react"
import DOMPurify from "dompurify"
import newImg from "../../assets/images/new.jpg"
import { Link } from "react-router-dom"
import "./New.scss"

const New = ({item, items}) => {
    const itemsView = items.map(itemV => {
        const {title: {rendered: titleItem}, id, content: {rendered: contentItem}} = itemV
        const changeContent = contentItem.length > 30 ? contentItem.split(" ").splice(0, 30).join(" ") + "..." : contentItem 
        return (
            <div className="new__item" key={id}>
                <img src={newImg} alt="new" className="new__item-img" />
                <div className="new__item-body">
                    <Link to={`/news/${id}`} className="new__item-tilte" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(titleItem)}}></Link>
                    <div className="new__item-content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(changeContent)}}></div>
                </div>
            </div>
        )
    })

    const {title: {rendered: title}, content: {rendered: content}} = item
    return (
        <div className="new">
            <div className="container">
                <div className="new__inner">
                    <div className="new__left page">
                        <h1 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}></h1>
                        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}>

                        </div>
                    </div>
                    <div className="new__right">
                        {itemsView}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New