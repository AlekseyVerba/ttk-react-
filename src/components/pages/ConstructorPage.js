import React from "react"
import RatesConstructorContainer from "../Rates/RatesConstructorContainer"
import Rates from "../Rates/RatesContainer"
import InfoPanelItems from "../InfoPanelItems/InfoPanelItemsContainer"
import FormQuestion from "../FormQuestion/FormQuestionContainer"

const ConstructorPage = () => {
    return (
        <>
            <Rates Wrapper={RatesConstructorContainer} />
            <InfoPanelItems />
            <FormQuestion />
        </>
    )
}


export default ConstructorPage