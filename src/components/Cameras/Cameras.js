import React from "react"
import { Link } from "react-router-dom"
import DOMPurify from "dompurify"
import brat from "../../assets/images/brat.png"
import "./Cameras.scss"

const Cameras = ({items, allItems, currentPage}) => {

    const viewItems = items.map(item => {
        const {id, title: {rendered: title}} = item
        return (
            <div className="camera__item" key={id}>
                <img src={brat} alt="camera" className="camera__img" /> 
                <div className="camera__item-info">
                    <h3 className="camera__item-title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}></h3>
                    <Link className="camera__item-link" to={`/cameras/${id}`}>Подробнее</Link>
                </div>
            </div>
        )
    })


    const pagePagination = Math.ceil(allItems / 10)
    let paginationView = []
    console.log(currentPage)
    for (let i = 0; pagePagination > i; i++) {
        paginationView.push(<Link className={+currentPage === i+1 ? "pagination__item pagination__item--active" : "pagination__item"} to={i+1 === 1 ? "/cameras/" : `/cameras?page=${i+1}`} key={i+1}>
            {i + 1}
        </Link>)
    }
    return (
        <div className="cameras">
            <div className="container">
                <h1 className="title">Камеры</h1>
                <h3 className="cameras__subtitle">Дождитесь загрузки плеера. Трансляция ведётся в режиме текущего <br></br> времени в месте проведения съёмки.</h3>
                <div className="cameras__inner">
                    {viewItems}
                </div>
                <div className="pagination">
                    {paginationView}
                </div>
            </div>
        </div>
    )
}

export default Cameras