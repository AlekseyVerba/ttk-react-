import React from "react"
import hocGetData from "../../hocs/hocGetData"
import Header from "../Header/Header"
import { Route } from "react-router"
import MainPage from "../pages/MainPage"
import "./App.scss"
import Footer from "../Footer/Footer"
import Radio from "../Radio/RadioContainer"
import ModalContactToUs from "../ModalContactToUs/ModalContactToUsContainer"
import ConstructorPage from "../pages/ConstructorPage"
import {Switch} from "react-router-dom"
import NoFound from "../pages/404-Page"
import SalesPage from "../pages/SalesPage"
import SalePage from "../pages/SalePage"
import CamerasPage from "../pages/CamerasPage"
import CameraPage from "../pages/CameraPage"
import NewsPage from "../pages/NewsPage"
import NewPage from "../pages/NewPage"
import GuidePage from "../pages/GuidePage"
import GuideItemPage from "../pages/GuideItemPage"
import AboutCompanyPage from "../pages/AboutCompanyPage"
import ContactsPage from "../pages/ContactsPage"
import RateItemPage from "../pages/RateItemPage"


const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/constructor/" exact component={ConstructorPage} />
                <Route path="/sales/" exact component={SalesPage} />
                <Route path="/sales/:id" exact component={SalePage} />
                <Route path="/cameras/" exact component={CamerasPage} />
                <Route path="/cameras/:id" exact component={CameraPage} />
                <Route path="/news/" exact component={NewsPage} />
                <Route path="/news/:id" exact component={NewPage} />
                <Route path="/guide/" exact component={GuidePage} />
                <Route path="/guide/:id" exact component={GuideItemPage} />
                <Route path="/about-company/" exact component={AboutCompanyPage} />
                <Route path="/contact/" exact component={ContactsPage} />
                <Route path="/rates/:id" exact component={RateItemPage} />
                <Route component={NoFound} />
            </Switch>
            <Footer />
            <Radio />
            <ModalContactToUs />
        </>
    )
}


export default hocGetData(App)