import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from 'axios';

// Named export: import { AllProducts, Name2 } from './components/AllProducts';
export const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setProducts(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleDeleteClick = (idToDelete) => {
        axios
        .delete(`http://localhost:8000/api/products/${idToDelete}`)
        .then((res) => {
            const filteredProducts = products.filter((product) => {
                const isProductToDelete = idToDelete === product._id;

                if (isProductToDelete) {
                    // Returning false tells filter to remove it.
                    return false;
                }

                return true;
            });

            setProducts(filteredProducts);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return <div className="w-50 mx-auto text-center ">
        <h2>All Products</h2>

        {products.map((product) => {
            const { _id, name, brand, category, lineage, potency, price, weight, effect, src, srcType } = product;

            return (
                <div key={_id} className="shadow mb-4 rounded border border-success p-4 bg-success">
                    <h3>
                        Name:
                        <Link className="ms-2" to={`/products/${_id}`}>
                        {name}
                        </Link>
                    </h3>
                    <h5>Brand: {brand}</h5>
                    <h5>Category: {category}</h5>
                    <h5>Lineage: {lineage}</h5>
                    <h5>Potency: {potency}%</h5>
                    <h5>Price: ${price}</h5>
                    <h5>Weight: {weight}</h5>
                    <h5>Effect: {effect}</h5>
                    <h5>Media: {src}</h5>
                    <h5>Media Type: {srcType}</h5>
                    <div>
                        <button onClick={(event) => {
                            handleDeleteClick(_id);
                        }} 
                        className="btn btn-sm btn-outline-danger mx-2 bg-danger text-black">Delete</button>

                        <Link to={`/products/${_id}/edit`} className="btn btn-sm btn-outline-warning mx-2 bg-warning text-black">
                            Edit
                        </Link>
                    </div>
                </div>
            )
        })}
    </div>
};

// Only 1 default per file: import AllProductsfrom './components/AllProducts';
// When importing default, you can choose any name.
export default AllProducts;
