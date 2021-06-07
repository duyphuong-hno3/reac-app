import initSateProduct from './inintState';

const ProductReducer = (state = initSateProduct, action) => {
    console.log("Action: ", action)
    switch (action.type) {
        case "SET_PRODUCTS":
            const newState = { ...state };
            newState.items = action.payload;
            return newState;
        case "DELETE_PRODUCT":
            const newStateDel = { ...state };
            const index = newStateDel.items.findIndex(item => {
                return item.id == action.payload;
            })
            newStateDel.items.splice(index, 1);
            return newStateDel;
        case "NEXT_PAGE":
            const newStateNextPage = { ...state };
            newStateNextPage._start = newStateNextPage._start + newStateNextPage._limit;
            return newStateNextPage;
        case "BACK_PAGE":
            const newStateBackPage = { ...state };
            newStateBackPage._start = newStateBackPage._start - newStateBackPage._limit;
            return newStateBackPage;
        default:
            return state;
    }
}
export default ProductReducer;