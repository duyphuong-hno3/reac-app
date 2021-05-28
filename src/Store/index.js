
import Reducer from './Reducers'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: Reducer
});



export default store;
