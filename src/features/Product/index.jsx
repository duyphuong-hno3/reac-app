import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

const AddProduct = React.lazy(() => import('./pages/AddProduct'));
const ListProducts = React.lazy(() => import('../../redux/features/Product/containers/ProductList'));
Product.propTypes = {

};

function Product(props) {
    const match = useRouteMatch();
    // console.log(match);
    // console.log(`${match.url}/add`)
    return (

        <Switch>
            <Route exact path={match.url} component={ListProducts} />
            <Route path={`${match.url}/add`} component={AddProduct} />
        </Switch>

    );
}

export default Product;