import React from "react"
import { Link } from "react-router-dom"
import DOMPurify from "dompurify"
import newImg from "../../assets/images/new.jpg"
import "./newsMain.scss"

const NewsMain = (props) => {
    const news = props.items.map(itemNew => {
        const {id,title: {rendered: title},link,content: {rendered:content},date} = itemNew
        const newLink = link.split("ru")[1]
        const newData = date.split("T")[0]
        const changeContent = content.length > 70 ? content.split(" ").splice(0, 20).join(" ") + "..." : content 
        return (
            <div key={id} className="news-main__item">
                <img className="news-main__img" src={newImg} />
                <div className="news-main-body">
                    <h6 className="news-main__date">{newData}</h6>
                    <h3 className="news-main__name" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}></h3>
                    <p className="news-main__description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(changeContent)}}>

                    </p>
                    <Link className="news-main__link" to={`/news/${id}`}>Подробнее</Link>
                </div>
            </div>
        )
    })
    return (
        <div className="news-main">
            <div className="container">
                <div className="news-main__inner">
                    {news}
                </div>
            </div>
        </div>
    )
}
export default NewsMain