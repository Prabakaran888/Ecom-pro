import React from 'react';
import Card from './Card';

const Products = ({ products, addToCart }) => {
    return (
        <div className="flex flex-wrap p-5 gap-1">
            {products.map((product) => (
                <div key={product.id}>
                    <Card product={product} addToCart={addToCart} />
                </div>
            ))}
        </div>
    );
};

export default Products;
