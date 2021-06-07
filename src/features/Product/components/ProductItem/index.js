import React from 'react';
import PropTypes from 'prop-types';

ProductItem.propTypes = {
    Product: PropTypes.object,
};
// ProductItem.propDefault = {
//     Product: {},
// }
function ProductItem(props) {

    const { Product, deleteProduct } = props;
    const delProduct = (e) => {
        console.log(e.target.id.split("-")[1]);
        deleteProduct(e.target.id.split("-")[1]);
    }
    return (
        <div className="card w-25">
            <img src="https://icdn.dantri.com.vn/thumb_w/640/2021/04/20/hot-girl-sai-thanh-dien-bikinidocx-1618903063287.jpeg"
                className="card-img-top" alt="...">

            </img>
            <div className="card-body ">
                <h5 className="card-title">{Product.name}</h5>
                <p className="card-text">{Product.Description}</p>
                <p className="card-text">{Product.price} đồng</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
                <a className="btn btn-primary" id={`delete-${Product.id}`} onClick={delProduct}>Delete</a>
            </div>
        </div>
    );
}

export default ProductItem;