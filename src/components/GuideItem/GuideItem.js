import React from "react"

import "./Guideitem.scss"
// guide-item__list-item
const GuideItem = ({contents,titles}) => {

    return (
        <div className="guide-item">
            <div className="container">
                <div className="guide-item__inner">
                    <div className="guide-item__left">
                        <ul className="guide-item__list">
                            {titles}
                        </ul>
                    </div>
                    <div className="guide-item__right page">
                        {contents}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GuideItem