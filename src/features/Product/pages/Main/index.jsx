import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Category from '../../../Category';
import ShowProducts from '../../components/ShowProducts'

Main.propTypes = {

};


function Main(props) {
    const match = useRouteMatch();
    const { Products, Categories, fetchProducts, fetchCategories, deleteProduct } = props;
    const limit = document.querySelector("#limit");
    const start = document.querySelector("#start");
    const btnSort = document.querySelector("#btnSort");

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, [fetchProducts])

    const createOptionsFilter = () => {
        var options = {};
        if (limit.value) {
            options = { _limit: limit.value, ...options };
        }
        if (start.value) {
            options = { _start: start.value, ...options };
        }
        if (btnSort.value) {
            options = { _sort: `name:${btnSort.value}`, ...options };
        }

        return options;
    }
    //console.log("Categories: ", Categories);
    const btnClickLoc = () => {

        fetchProducts({ _limit: limit.value, _start: start.value });
    }
    const btnClickSort = (e) => {
        var value = e.target.value;
        const listGroup = document.querySelector("#lg-1").children
        var options = createOptionsFilter();
        for (const element of listGroup) {

            if (element.ariaCurrent === "true") {
                options = { _categories: element.id.split("-")[1], ...options };
            }
        }
        console.log("--------------------" + "ListGroup: ", listGroup[0].ariaCurrent);


        fetchProducts(options);
        if (value === "ASC") {
            btnSort.value = "DESC";
            btnSort.innerHTML = "Tang dan";
        } else {
            btnSort.value = "ASC";
            btnSort.innerHTML = "Giam dan";
        }
    }


    const btnCancelFilter = () => {
        fetchProducts();

    }
    //console.log("Products items: ", Products.items);
    const categoryClick = (e) => {
        const listGroup = document.querySelector("#lg-1").children
        const elementClick = e.target;
        for (const element of listGroup) {
            element.ariaCurrent = false;
        }
        elementClick.ariaCurrent = true;
        var options = createOptionsFilter();
        options = { _categories: e.target.id.split("-")[1], ...options };
        fetchProducts(options);

    }

    return (
        <div >
            <div className="row"><h1>Products Store</h1></div>
            <div className="row">
                <div className="col-3">
                    <button onClick={btnClickSort} value="DESC" id="btnSort">Tang dan</button>
                    <button onClick={btnCancelFilter} >Bo loc</button>
                    <div className="list-group" id="lg-1">
                        {
                            Categories.items.map(Category => {
                                return <a className="list-group-item list-group-item-action" key={Category.id} id={`category-${Category.id}`} onClick={categoryClick}>{Category.name}</a>
                            })
                        }
                    </div>
                </div>
                <div className="col">
                    <ShowProducts Products={Products} deleteProduct={deleteProduct} />
                </div>
            </div>





            start:<input type="text" id="start" /> <br />
            limit:<input type="text" id="limit" /><br />
            <button onClick={btnClickLoc}>Loc SL</button>
            <Link to={`${match.url}/add`} className="nav-link active">Add product</Link>
        </div>
    );
}

export default Main;