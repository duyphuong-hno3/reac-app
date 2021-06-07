import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem';
//const ProductItem = React.lazy(() => import('../ProductItem'));

ShowProducts.propTypes = {

};

function ShowProducts(props) {
    const { Products, deleteProduct } = props
    console.log("Products Items: ", Products.items)
    return (
        <div className="container-fluid d-flex flex-wrap">
            {
                Products.items.map(Product => {
                    return <ProductItem Product={Product} key={Product.id} deleteProduct={deleteProduct} />;
                })
            }
        </div>
    );
}

export default ShowProducts;