import React from 'react';
import ProductList from './ProductList';

const Catalogo = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Todos los productos</h1>
      <ProductList />
    </div>
  );
};

export default Catalogo;