import buttonsMain from "./buttonsMain"
import servicesReducer from "./ServicesReducer"
import ratesReducer from "./ratesReducer"
import newsSmallBlockReducer from "./newsSmallBlockReducer"
import sliderMainReducer from "./sliderMainReducer"
import modalContactReducer from "./modalContactReducer"
import salesReducer from "./salesReducer"
import saleReducer from "./saleReducer"
import camerasReducer from "./camerasReducer"
import cameraReducer from "./cameraReducer"
import newsReducer from "./newsReducer"
import newReducer from "./newReducer"
import guideReducer from "./guideReducer"
import guideItemReducer from "./guideItemReducer"
import aboutCompanyReducer from "./aboutCompanyReducer"
import contactsReducer from "./contactsReducer"

const reduce = (state, actions) => {
    return {
        buttonsMain: buttonsMain(state, actions),
        services: servicesReducer(state, actions),
        rates: ratesReducer(state, actions),
        newsSmallBlock: newsSmallBlockReducer(state, actions),
        sliderMain: sliderMainReducer(state, actions),
        modalContact: modalContactReducer(state, actions),
        sales: salesReducer(state, actions),
        sale: saleReducer(state, actions),
        cameras: camerasReducer(state, actions),
        camera: cameraReducer(state, actions),
        news: newsReducer(state, actions),
        newItem: newReducer(state, actions),
        guide: guideReducer(state, actions),
        guideItem: guideItemReducer(state, actions),
        aboutCompany: aboutCompanyReducer(state, actions),
        contacts: contactsReducer(state, actions)
    }
}


export default reduce