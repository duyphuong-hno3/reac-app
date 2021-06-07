const categories = {
    items: [],
}
const GET_CATEGORIES_PRODUCT = "GET_CATEGORIES_PRODUCT"
const CategoryReducer = (state = categories, action) => {
    switch (action.type) {
        case GET_CATEGORIES_PRODUCT:
            const newState = { ...state }
            newState.items = action.payload;
            return newState;
        default:
            return state;
    }
}

export default CategoryReducer;