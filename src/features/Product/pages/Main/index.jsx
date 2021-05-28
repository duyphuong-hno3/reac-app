import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

Main.propTypes = {

};


function Main(props) {
    const match = useRouteMatch();
    const { Products, fetchProducts } = props;

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])


    const btnClickLoc = () => {
        const limit = document.querySelector("#limit").value;
        const start = document.querySelector("#start").value;
        fetchProducts({ _limit: limit, _start: start });
    }


    const btnClickSort = () => {
        var value = document.querySelector("#btnSort").value;
        fetchProducts({ _sort: `id:${value}` });
        if (value === "ASC") {
            document.querySelector("#btnSort").value = "DESC";
            document.querySelector("#btnSort").innerHTML = "Tang dan";
        } else {
            document.querySelector("#btnSort").value = "ASC";
            document.querySelector("#btnSort").innerHTML = "Giam dan";
        }
    }


    const btnCancelFilter = () => {
        fetchProducts();
    }
    //console.log("Products items: ", Products.items);

    return (
        <div>
            <h1>Main Products</h1>
            <button onClick={btnClickSort} value="ASC" id="btnSort">Tang dan</button>
            <button onClick={btnCancelFilter} >Bo loc</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.items.map(product => {
                            return <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.Description}</td>
                                <td>{product.price}</td>
                                <td>{product.categories.map(category => `${category.name}`)}</td>
                            </tr>
                        }

                        )
                    }

                </tbody>
            </table>
            start:<input type="text" id="start" /> <br />
            limit:<input type="text" id="limit" /><br />
            <button onClick={btnClickLoc}>Loc SL</button>
            <Link to={`${match.url}/add`} className="nav-link active">Add product</Link>
        </div>
    );
}

export default Main;