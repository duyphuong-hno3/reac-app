import initSateProduct from './inintState';

const ProductReducer = (state = initSateProduct, action) => {
    console.log("Action: ", action)
    switch (action.type) {
        case "GET_PRODUCTS":
            const newState = { ...state };
            newState.items = action.payload;
            return newState;
        default:
            return state;
    }
}
export default ProductReducer;