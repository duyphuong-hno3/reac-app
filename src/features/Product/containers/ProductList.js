import { connect } from 'react-redux';
import ProductList from '../pages/Main'
import queryString from 'query-string';
import axios from 'axios';
const mapStateToProps = (state) => {
    return {
        Products: state.Products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProductsAPI: (payload) => dispatch({ type: 'GET_PRODUCTS', payload: payload }),
        shows2: () => dispatch({ type: 2 }),
        fetchProducts: async (options = {}) => {
            try {
                let url = '';
                if (options !== {}) {
                    var stringoptions = queryString.stringify(options);
                    console.log(stringoptions);
                    url = `http://localhost:1337/products?${stringoptions}`;
                } else {
                    url = `http://localhost:1337/products`
                }
                const data = await axios({
                    method: "get",
                    url: url,
                })
                return dispatch({ type: 'GET_PRODUCTS', payload: data.data });
            } catch (err) {
                console.log(err);
            }

        },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

