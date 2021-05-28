import React from 'react';
import axios from 'axios';
AddProduct.propTypes = {

};

function AddProduct(props) {
    const submitform = (e) => {
        e.preventDefault();
        console.log()
        var name = document.querySelector("#nameProduct").value;
        var Description = document.querySelector("#desProduct").value;
        var price = document.querySelector("#priceProduct").value;
        var categories = document.querySelector("#categoryProduct").value;
        var data = {
            "name": name,
            "Description": Description,
            "price": price,
            "categories": categories
        }
        axios({
            method: "post",
            url: "http://localhost:1337/products",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            data: data

        }).then(result => {
            console.log(result);
            window.location.href = "/products"

        }).catch(error => console.log(error))
    }
    return (
        <div className="row">
            <div className="col">

            </div>
            <div className="col">
                <form onSubmit={submitform}>
                    <div className="mb-3">
                        <label for="nameProduct" className="form-label">Tên Sản phẩm</label>
                        <input type="text" className="form-control" id="nameProduct" ></input>
                    </div>
                    <div className="mb-3">
                        <label for="desProduct" className="form-label">Mô tả</label>
                        <textarea className="form-control" id="desProduct"></textarea>

                    </div>
                    <div className="mb-3">
                        <label for="priceProduct" className="form-label">Giá</label>
                        <input type="number" className="form-control" id="priceProduct" ></input>
                    </div>
                    <div className="mb-3">
                        <label for="categoryProduct" className="form-label">Loại</label>
                        <input type="number" className="form-control" id="categoryProduct" ></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col">

            </div>

        </div>


    );
}

export default AddProduct;