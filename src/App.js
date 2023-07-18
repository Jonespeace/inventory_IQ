import { Link, Routes, Route, Navigate } from 'react-router-dom';

import { NotFound } from './views/NotFound';
import { AllProducts } from './views/AllProducts';
import { EditProduct } from './views/EditProduct';
import { NewProduct } from './views/NewProduct';
import { OneProduct } from './views/OneProduct';


import './App.css';

function App() {
  return (
  <div className='container'>
    <nav className='navbar navbar-dark bg-dark navbar navbar-expand-lg sticky-top justify-content-center'>
      <h1 className='navbar-brand mb-0'>Stash</h1>
      <div className='navbar-nav justify-content-between'>
        <Link to='/products' className='btn btn-outline-success btn-sm'>
          All Products
        </Link>
        <Link to='/products/new' className='btn btn-outline-success btn-sm mx-3'>
          New Product
        </Link>
      </div>
    </nav>

    {/*
    The current route being viewed will be rendered here.
    */}
    <Routes>
      {/* Redirect example */}
      <Route path='/' element={<Navigate to="/products" replace />} />
      <Route path='/products' element={<AllProducts />} />
      <Route path='/products/new' element={<NewProduct />} />
      <Route path='/products/:id/edit' element={<EditProduct />} />
      <Route path='/products/:id' element={<OneProduct />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>
  );
}

export default App;
