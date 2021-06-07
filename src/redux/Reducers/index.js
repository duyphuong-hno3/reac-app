import { combineReducers } from 'redux';
import ProductReducer from "../features/Product/reducer"
import CategoryReducer from '../features/Category/reducer'

const Reducer = combineReducers({
    Products: ProductReducer,
    Categories: CategoryReducer,
})

export default Reducer;