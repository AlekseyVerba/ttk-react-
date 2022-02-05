import React from "react"
import { Component } from "react"
import hocFetchItem from "../../hocs/hocFetchItem"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import { connect } from "react-redux"
import GuideItem from "./GuideItem"
import { withRouter } from "react-router"
import {sole} from "../../actions/GuideItemActions/GuideItemActions"
import DOMPurify from "dompurify"



const GuideItemContainer = (Wrapper) => {
    return class extends Component {

        state = {
            titleAndContentActive: 0,
            questionAndAsked: {
                contentId: null,
                itemId: null
            }
        }

        changeTitleAndContentActive = (id) => {
            this.setState({
                titleAndContentActive: id
            })
        }

        changeQuestionAndAsked = (contentId, itemId) => {

            this.setState(({questionAndAsked}) => {
                if (contentId === questionAndAsked.contentId && itemId === questionAndAsked.itemId) {
                    return {
                        questionAndAsked: {
                            contentId: null,
                            itemId: null
                        }
                    }
                } else {
                    return {
                        questionAndAsked: {
                            contentId,
                            itemId
                        }
                    }
                }
            })
        }


        



        render() {
            const {items} = this.props
            const {titleAndContentActive, questionAndAsked} = this.state
            const titles = items.acf.content_guide_category.map((title,idx) => {
                return <li className={titleAndContentActive === idx ? "guide-item__list-item guide-item__list-item--active" : "guide-item__list-item"} onClick={() => this.changeTitleAndContentActive(idx)} key={title.name_block_guide_category}>
                    <span>{title.name_block_guide_category}</span>
                </li>
            })
            // guide__question-ask
            const contents = items.acf.content_guide_category.map((content, idx) => {
                return <div className={titleAndContentActive === idx ? "guide-item__content guide-item__content--active" : "guide-item__content"} key={content.name_block_guide_category}>
                    {
                        content.question_and_ask_block_guide_category.map((item, idxTwo) => {
                           return (
                                <div className={questionAndAsked.contentId === idx && questionAndAsked.itemId === idxTwo ? "guide__question-ask guide__question-ask--active" : "guide__question-ask"} onClick={() => this.changeQuestionAndAsked(idx, idxTwo)} key={item.question_block_guide_category}>
                                    <p className="guide__question">{item.question_block_guide_category}</p>
                                    <div className="guide__ask" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.ask_block_guide_category)}}></div>
                                </div>
                           )
                        })
                    }
        
                </div>
            })


            return <Wrapper titles={titles} contents={contents} />
        }
    }
}

const mapStateToProps = ({guideItem}) => {
    return {
        ...guideItem
    }
}

const mapDispatchToProps = (dispatch, oweProps) => {
    const {data: {getGuideItem}, match: {params: {id}}} = oweProps

    return {
        sole: sole(dispatch,() => getGuideItem(id))
    }
}


export default compose(
    withRouter,
    hocGetData,
    connect(mapStateToProps ,mapDispatchToProps),
    hocFetchItem
)(
    GuideItemContainer(GuideItem)
)