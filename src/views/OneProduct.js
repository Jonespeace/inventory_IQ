import { useState, useEffect } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

export const OneProduct = (props) => {
    // url route param matching ':id'.
    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    const handleDeleteClick = (idToDelete) => {
        axios
        .delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            navigate('/products')
        })
        .catch((error) => {
            console.log(error);
        });
    };

    if (product === null) {
        return 'Loading...'
    }

    // DESTRUCTURING WILL BREAK when destination is null while waiting for the .get
    // unless you verify it's not null before.

    const { _id, name, brand, category, lineage, potency, price, weight, effect, src, srcType } = product;

    return (
    <div className="w-50 mx-auto text-center ">
        <h2>One Product</h2>
        
        <div key={_id} className="shadow mb-4 rounded border border-success p-4 bg-success">
            <h3>Name: {name}</h3>
            <h5>Brand: {brand}</h5>
            <h5>Category: {category}</h5>
            <h5>Lineage: {lineage}</h5>
            <h5>Potency: {potency}%</h5>
            <h5>Price: ${price}</h5>
            <h5>Weight: {weight}</h5>
            <h5>Effect: {effect}</h5>
            <h5>Media: {src}</h5>
            <h5>Media Type: {srcType}</h5>
        </div>

        {srcType === 'img' && <img className='shawdow rounded' width='100%'src={src} alt={name}/>}

        {/* The iframe code is found by clicking share buttons and then embed */}

        {srcType === 'Youtube Embed' && (
            <iframe
            title={src}
            width='100%'
            height='800'
            src={src}
            frameborder='0'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="shawdow rounded"
            ></iframe>
        )}
            <div>
                <button onClick={(event) => {
                    handleDeleteClick();
                }} 
                className="btn btn-lg btn-outline-danger mx-3 mb-3 mt-3 bg-danger text-black">Delete</button>
            </div>
    </div>
    )
};