import React from "react"
import DOMPurify from "dompurify"
import { Link } from "react-router-dom"
import imgSale from "../../assets/images/sale.jpg"
import "./Sales.scss"


const Sales = ({items}) => {

    const viewItems = items.map(item => {
        console.log(item)
        const {id, title: {rendered: title}, content: {rendered: content}} = item
        const changeContent = content.length > 70 ? content.split(" ").splice(0, 20).join(" ") + "..." : content 
        return (
            <Link to={`/sales/${id}`} className="sales__item" key={id}>
                <img src={imgSale} alt="sale" className="sales__item-img" />
                <div className="sales__item-info">
                    <h4 className="sales__item-title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}></h4>
                    <p className="sales__item-description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(changeContent)}}></p>
                </div>
            </Link>
        )
    })

    return (
        <div className="sales">
            <div className="container">
                <h1 className="title">Акции</h1>
                <div className="sales__inner">
                    {viewItems}
                </div>
            </div>
        </div>
    )
}

export default Sales