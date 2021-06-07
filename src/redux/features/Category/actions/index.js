import axios from 'axios'




const GET_CATEGORIES_PRODUCT = "GET_CATEGORIES_PRODUCT"


const getCategories = () => async (dispatch) => {
    try {
        const url = "http://192.168.1.17:1337/Categories";
        const data = await axios({
            url: url,
            method: "GET",
        })
        return dispatch({ type: GET_CATEGORIES_PRODUCT, payload: data.data })
    } catch (error) {
        console.error(error);
    }

}

export default { getCategories }