import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import hocGetData from "../../hocs/hocGetData"
import compose from "../../utils/compose"
import hocFetchItem from "../../hocs/hocFetchItem"
import GuideItem from "../GuideItem/GuideItem"
import {sole} from "../../actions/AboutCompanyActions/AboutCompanyActions"
import DOMPurify from "dompurify"
import docImg from "../../assets/images/doc.png"
import {modalToggle} from "../../actions/ModalContactActions/ModalContactActions"
import "./AboutCompany.scss"


const AboutCompanyContainer = (Wrapper) => {
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
                 console.log(this.props)
                 let titles = null
                 let contents = null
                if (this.props.items !== undefined) {
                    const {text_about_company, advantages_about_company, documents_about_company, license_about_company, requisites_about_company} = this.props.items.acf

                const titlesArr = ["О компании", "Преимущества", "Реквизиты", "Лицензии", "Документы"]
                const contentsArr = [text_about_company, advantages_about_company, requisites_about_company, license_about_company, documents_about_company]

                titles = titlesArr.map((title, idx) => {
                    return (
                        <li className={this.state.titleAndContentActive === idx ? "guide-item__list-item guide-item__list-item--active" : "guide-item__list-item"} onClick={() => this.changeTitleAndContentActive(idx)} key={title}>
                            <span>{title}</span>
                        </li>
                    )
                })


                contents = contentsArr.map((content, idx) => {
                    return <div className={this.state.titleAndContentActive === idx ? "guide-item__content guide-item__content--active" : "guide-item__content"} key={idx}>
                        {
                        idx === 0 || idx === 1 || idx === 2 ? <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}></div>
                                : null
                        }
                        {
                            idx === 3 || idx === 4 ?
                            <div className="guide-item__docs">
                                {
                                    content.map((doc, index) => {
                                        return <a href={ idx === 4 ? doc.documents_about_company_file : doc.license_about_company_file} download className="guide-item__doc" key={index}>
                                                    <img src={docImg} className="guide-item__doc-img" alt="doc" />
                                                    <h5 className="guide-item__doc-description">{idx === 4 ? doc.documents_about_company_name : doc.license_about_company_name}</h5>
                                                </a>
                                    })
                                }
                            </div>

                            : null
                        }
            
                    </div>
                })
            }

            console.log(titles)
            console.log(contents)
            return (
                <Wrapper titles={titles} contents={contents} />
            )
        }
    }
}

const mapStateToProps = ({aboutCompany}) => {
    return {
        ...aboutCompany
    }
}

const dispatchToProps = (dispatch, ownProps) => {
    return {
        sole: sole(dispatch,ownProps.data.getAboutCompany),
        modalToggle: () => dispatch(modalToggle())
    }
}

export default compose(
    hocGetData,
    connect(mapStateToProps, dispatchToProps),
    hocFetchItem
)(AboutCompanyContainer(GuideItem))

