import {createStore} from "redux"
import rootReducer from "../reducers"
let globalStore = null;
export default function configureStore() {
    if (globalStore !== null)
        return globalStore;

    const store = createStore(rootReducer);

    globalStore = Object.assign({}, store);
    return globalStore;
}
