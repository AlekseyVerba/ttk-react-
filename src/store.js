import reduce from "./reducers/index"
import { createStore } from "redux"

const store = createStore(reduce)

export default store