import { useParams, useNavigate } from "react-router-dom"; 

import { useEffect, useState } from 'react';

import  axios  from 'axios';

export const EditProduct = (props) => {
    // url route param matching ':id'.
    const { id } = useParams();

    const navigate = useNavigate();

    const [errors, setErrors] = useState(null);

    // Form state
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [lineage, setLineage] = useState('');
    const [potency, setPotency] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [effect, setEffect] = useState('');
    const [src, setSrc] = useState('');
    const [srcType, setSrcType] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                const { name, brand, category, lineage, potency, price, 
                    weight, effect, src, srcType } = res.data;

                setName(name);
                setBrand(brand);
                setCategory(category);
                setLineage(lineage);
                setPotency(potency);
                setPrice(price);
                setWeight(weight);
                setEffect(effect);
                setSrc(src);
                setSrcType(srcType);
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    const handleNewProductSubmit = (event) => {
        event.preventDefault();

        const editedProduct = {
            // Long-form syntax
            // key: value
            name: name,
            // Shorthand syntax can be used when the key name matches the var name
            brand,
            category,
            lineage,
            potency,
            price,
            weight,
            effect,
            src,
            srcType,
        };
        axios.put(`http://localhost:8000/api/products/${id}`, editedProduct)
            .then((res) => {
                console.log(res.data)
                navigate(`/products/${id}`)
            })
            .catch((error) => {
                console.log(error);
                setErrors(errors);
            })
    };

    return <div className='rounded shadow mx-auto w-50'>
    <h2 className='text-center'>Edit Product</h2>
    <form
        onSubmit={(event) => {
            handleNewProductSubmit(event);
        }}>
        <div className='form-group'>
            <label className='h5'>Name</label>
            <input 
            value={name}
            onChange={(event) => {
                setName(event.target.value)
            }}
            type='text'
            className='form-control'
            />
        </div>
        <div className='form-group'>
            <label className='h5'>Brand</label>
            <input 
            value={brand}
            onChange={(event) => {
                setBrand(event.target.value)
            }}
            type='text'
            className='form-control'
            />
        </div>
        <div className='form-group'>
            <label className='h5'>Category</label>
            <input
            value={category}
            onChange={(event) => {
                setCategory(event.target.value)
            }}
            type='text'
            className='form-control'
            />
        </div>
        <div className='form-group'>
            <label className='h5'>Lineage</label>
            <select 
            value={lineage}
            onChange={(event) => {
                setLineage(event.target.value)
            }}
            type='text'
            className='form-control'
            >
                <option value='sativa'>Sativa</option>
                <option value='hybrid'>Hybrid</option>
                <option value='indica'>Indica</option>
                <option value='cbd'>CBD</option>
            </select>
        </div>
        <div className='form-group'>
            <label className='h5'>Potency</label>
            <input 
            value={potency}
            onChange={(event) => {
                setPotency(event.target.value)
            }}
            type='text'
            className='form-control'
            />
        </div>
        <div className='form-group'>
            <label className='h5'>Price</label>
            <input 
            value={price}
            onChange={(event) => {
                setPrice(event.target.value)
            }}
            type='text'
            className='form-control'
            />
        </div>
        <div className='form-group'>
            <label className='h5'>Weight</label>
            <input 
            value={weight}
            onChange={(event) => {
                setWeight(event.target.value)
            }}
            type='text'
            className='form-control'
            />
        </div>
        <div className='form-group'>
            <label className='h5'>Effect</label>
            <input 
            value={effect}
            onChange={(event) => {
                setEffect(event.target.value)
            }}
            type='text'
            className='form-control'
            />
        </div>
        <div className='form-group'>
            <label className='h5'>Image / Video</label>
            <input 
            value={src}
            onChange={(event) => {
                setSrc(event.target.value)
            }}
            type='text'
            className='form-control'
            />
        </div>
        <div className='form-group'>
            <label className='h5'>Media Type</label>
            <select 
            value={setSrcType}
            onChange={(event) => {
                setSrcType(event.target.value)
            }}
            type='text'
            className='form-control'
            >
                <option value='img'>Image</option>
                <option value='Youtube Embed'>Youtube Embed</option>
            </select>
        </div>
        <button className='btn btn-outline-success mt-2'>Submit</button>
    </form>
</div>
}; 