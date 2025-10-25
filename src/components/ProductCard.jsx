import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="h-100 d-flex flex-column shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="img-fluid"
        style={{ height: '200px', objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2">{product.title}</Card.Title>
        <Card.Text className="text-muted mb-2">
          {product.description.slice(0, 100)}...
        </Card.Text>
        <Card.Text className="fw-bold">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;