import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Destacados = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false); // ya cargó
      })
      .catch(err => {
        console.error(err);
        setLoading(false); // evitar spinner infinito si hay error
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-4">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Row className="mt-4">
      {products.map(product => (
        <Col md={3} key={product.id}>
          <ProductCard product={product} agregarAlCarrito={() => {}} />
        </Col>
      ))}
    </Row>
  );
};

export default Destacados;