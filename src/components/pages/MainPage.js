import React from "react"
import MainButtons from "../MainButtons/MainButtonsContainer"
import Services from "../Services/ServicesContainer"
import Rates from "../Rates/RatesContainer"
import NoFind from "../NoFind/NoFind"
import NewsMain from "../NewsMain/NewsMainContainer"
import FormQuestion from "../FormQuestion/FormQuestionContainer"
import Slider from "../Slider/SliderContainer"
import RatesMain from "../Rates/RatesMain"


const MainPage = () => {
    return (
        <>
            <Slider/>
            <MainButtons />
            <Services />
            <Rates Wrapper={RatesMain} />
            <NoFind />
            <NewsMain />
            <FormQuestion/>
        </>
    )
} 

export default MainPage