import {createStore} from "redux"
import itemsReducer from "./shoppingList/shopReducer"
import {devToolsEnhancer} from "redux-devtools-extension"


let store = createStore(itemsReducer,devToolsEnhancer())
let unsubscribe = store.unsubscribe(()=>{})

export {store,unsubscribe}