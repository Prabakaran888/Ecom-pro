import React from 'react';

const Card = ({ product, addToCart }) => {
    const handleAddProduct = () => {
        addToCart(product);
    };

    return (
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-4 w-80">
            <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-2" />
            <p className="truncate font-semibold text-center mb-1 w-full overflow-hidden whitespace-nowrap text-black">
                {product.title}
            </p>
            <p className="text-black font-medium mb-2">₹{product.price}</p>
            <button 
                className="text-white py-1 px-3 rounded-3xl" 
                onClick={handleAddProduct}
            >
                {product.added ? 'Added' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default Card;
