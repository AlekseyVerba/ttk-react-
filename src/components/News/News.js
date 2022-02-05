import React from "react"
import { Link } from "react-router-dom"
import newImg from "../../assets/images/new.jpg"
import DOMPurify from "dompurify"
import "./News.scss"

const News = ({items, allItems, currentPage}) => {

    const viewItems = items.map(item => {
        const {id, title: {rendered: title}, content: {rendered: content}} = item
        const changeContent = content.length > 70 ? content.split(" ").splice(0, 20).join(" ") + "..." : content
        return (
            <div className="camera__item camera__item--new" key={id}>
                <img src={newImg} alt="camera" className="camera__img" /> 
                <div className="camera__item-info">
                    <h3 className="camera__item-title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}></h3>
                    <p className="sales__item-description sales__item-description--new" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(changeContent)}}></p>
                    <Link className="camera__item-link" to={`/news/${id}`}>Подробнее</Link>
                </div>
            </div>
        )
    })


    const pagePagination = Math.ceil(allItems / 10)
    let paginationView = []
    console.log(currentPage)
    for (let i = 0; pagePagination > i; i++) {
        paginationView.push(<Link className={+currentPage === i+1 ? "pagination__item pagination__item--active" : "pagination__item"} to={i+1 === 1 ? "/news/" : `/news?page=${i+1}`} key={i+1}>
            {i + 1}
        </Link>)
    }
    return (
        <div className="cameras">
            <div className="container">
                <h1 className="title">Новости</h1>
                <h3 className="cameras__subtitle">Дождитесь загрузки плеера. Трансляция ведётся в режиме текущего <br></br> времени в месте проведения съёмки.</h3>
                <div className="cameras__inner">
                    {viewItems}
                </div>
                {pagePagination !== 1 ? 
                    <div className="pagination">
                        {paginationView}
                    </div>    
                : null
                }
            </div>
        </div>
    )
}

export default News