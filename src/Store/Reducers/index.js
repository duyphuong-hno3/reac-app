import { combineReducers } from 'redux';
import ProductReducer from "./Product"

const Reducer = combineReducers({
    Products: ProductReducer,
})

export default Reducer;