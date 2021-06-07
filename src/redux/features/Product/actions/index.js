import queryString from 'query-string';
import axios from 'axios';



const setStateProductsItems = (newState) => {
    return {
        type: "SET_PRODUCTS",
        payload: newState,
    }
}
const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}
const sortProduct = (payload) => {
    return {
        type: "SORT_PRODUCTS",
        payload: payload
    }
}
const NextPage = (payload) => {
    return {
        type: "NEXT_PAGE",
        payload: payload
    }
}
const BackPage = (payload) => {
    return {
        type: "BACK_PAGE",
        payload: payload
    }
}

const fetchProducts = (options = {}) => {

    //console.log("Options: ", options);
    return async (dispatch) => {
        try {
            let url = '';
            //console.log("Options:  ", options)
            if (options !== {}) {
                var stringoptions = queryString.stringify(options);
                console.log(stringoptions);
                url = `http://192.168.1.17:1337/products?${stringoptions}`;
            } else {
                url = `http://192.168.1.17:1337/products`;
            }
            const data = await axios({
                method: "get",
                url: url,
            })
            return dispatch(setStateProductsItems(data.data));
        } catch (err) {
            console.log(err);
        }

    }
}

const delProduct = (id) => async (dispatch) => {
    try {
        const url = `http://192.168.1.17:1337/products/${id}`;
        const data = await axios({
            method: "delete",
            url: url,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(data)
        return dispatch(deleteProduct(data.data.id));
    } catch (error) {

    }
}
export default { fetchProducts, setStateProductsItems, delProduct };
