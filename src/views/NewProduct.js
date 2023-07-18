import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';

export const NewProduct = (props) => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [lineage, setLineage] = useState('sativa');
    const [potency, setPotency] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [effect, setEffect] = useState('');
    const [src, setSrc] = useState('');
    const [srcType, setSrcType] = useState('img');

    const [validationErrors, setValidationErrors] = useState(null);

    const navigate = useNavigate();

    const handleNewProductSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
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
        axios.post('http://localhost:8000/api/products', newProduct)
            .then((res) => {
                console.log(res.data)
                navigate('/products')
            })
            .catch((error) => {
                console.log(error);
                // Optional chaining will return undefined if any of the keys dont exist without crashing, or the accessed value.
                setValidationErrors(error.response?.data?.errors);
            })
    };

    return(
    <div className='rounded shadow mx-auto w-50'>
        <h2 className='text-center'>New Product</h2>
        <form
            onSubmit={(event) => {
                handleNewProductSubmit(event);
            }}>
            <div className='form-group'>
                <label className='h5'>Name</label>
                {validationErrors?.name && <span className='text-danger ms-2'>{validationErrors.name.message}</span>}
                <input onChange={(event) => {
                    setName(event.target.value)
                }}
                type='text'
                className='form-control'
                />
            </div>
            <div className='form-group'>
                <label className='h5'>Brand</label>
                {validationErrors?.brand && <span className='text-danger ms-2'>{validationErrors.brand.message}</span>}
                <input onChange={(event) => {
                    setBrand(event.target.value)
                }}
                type='text'
                className='form-control'
                />
            </div>
            <div className='form-group'>
                <label className='h5'>Category</label>
                {validationErrors?.category && <span className='text-danger ms-2'>{validationErrors.category.message}</span>}
                <input onChange={(event) => {
                    setCategory(event.target.value)
                }}
                type='text'
                className='form-control'
                value={category}
                />
            </div>
            <div className='form-group'>
                <label className='h5'>Lineage</label>
                {validationErrors?.lineage && <span className='text-danger ms-2'>{validationErrors.lineage.message}</span>}
                <select onChange={(event) => {
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
                {validationErrors?.potency && <span className='text-danger ms-2'>{validationErrors.potency.message}</span>}
                <input onChange={(event) => {
                    setPotency(event.target.value)
                }}
                type='text'
                className='form-control'
                />
            </div>
            <div className='form-group'>
                <label className='h5'>Price</label>
                {validationErrors?.price && <span className='text-danger ms-2'>{validationErrors.price.message}</span>}
                <input onChange={(event) => {
                    setPrice(event.target.value)
                }}
                type='text'
                className='form-control'
                />
            </div>
            <div className='form-group'>
                <label className='h5'>Weight</label>
                {validationErrors?.weight && <span className='text-danger ms-2'>{validationErrors.weight.message}</span>}
                <input onChange={(event) => {
                    setWeight(event.target.value)
                }}
                type='text'
                className='form-control'
                />
            </div>
            <div className='form-group'>
                <label className='h5'>Effect</label>
                {validationErrors?.effect && <span className='text-danger ms-2'>{validationErrors.effect.message}</span>}
                <input onChange={(event) => {
                    setEffect(event.target.value)
                }}
                type='text'
                className='form-control'
                />
            </div>
            <div className='form-group'>
                <label className='h5'>Image / Video</label>
                {validationErrors?.src && <span className='text-danger ms-2'>{validationErrors.src.message}</span>}
                <input onChange={(event) => {
                    setSrc(event.target.value)
                }}
                type='text'
                className='form-control'
                />
            </div>
            <div className='form-group'>
                <label className='h5'>Media Type</label>
                {validationErrors?.srcType && <span className='text-danger ms-2'>{validationErrors.srcType.message}</span>}
                <select onChange={(event) => {
                    setSrcType(event.target.value)
                }}
                type='text'
                className='form-control'
                value={srcType}
                >
                    <option value='img'>Image</option>
                    <option value='Youtube Embed'>Youtube Embed</option>
                </select>
            </div>
            <button className='btn btn-outline-success mt-2'>Submit</button>
        </form>
    </div>
    );
};
