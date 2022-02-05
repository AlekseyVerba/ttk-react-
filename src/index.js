import React from "react"
import ReactDom from "react-dom"
import App from "./components/App/App"
import store from "./store"
import { Provider } from "react-redux"
import getData from "./services/getData/getData"
import ErrorBoundry from "./components/Error/ErrorBoundry/ErrorBoundry"
import { ProviderGetData } from "./context/contextData"
import { BrowserRouter as Router} from "react-router-dom"
import "./smallComponents/styles.scss"
import { YMaps } from 'react-yandex-maps';


const getDataEl = new getData()

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ProviderGetData value={getDataEl}>
                <Router>
                    <YMaps>
                        <App />
                    </YMaps>
                </Router>
            </ProviderGetData>
        </ErrorBoundry>
    </Provider>,
    document.querySelector("#root")
)