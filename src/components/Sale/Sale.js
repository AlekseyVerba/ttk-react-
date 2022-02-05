import React from "react"
import DOMPurify from "dompurify"
import "./page.scss"


const Sale = (item) => {
    const {title: {rendered: title}, content: {rendered: content}} = item.item
    return (
        <div className="sale page">
            <div className="container">
                <div className="sale__inner">
                    <h1 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}></h1>
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale