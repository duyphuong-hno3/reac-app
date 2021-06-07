import { connect } from 'react-redux';
import ProductList from '../../../../features/Product/pages/Main'
import actionsPr from '../actions'
import actionsCa from '../../Category/actions'
import queryString from 'query-string';
import axios from 'axios';
const mapStateToProps = (state) => {
    return {
        Products: state.Products,
        Categories: state.Categories
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (options = {}) => dispatch(actionsPr.fetchProducts(options)),
        fetchCategories: () => dispatch(actionsCa.getCategories()),
        setStateProductsItems: (newState) => dispatch(actionsPr.setStateProductsItems(newState)),
        deleteProduct: (id) => dispatch(actionsPr.delProduct(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

