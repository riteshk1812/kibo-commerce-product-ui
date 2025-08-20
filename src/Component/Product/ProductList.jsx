import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export default function ProductList() {

    const { products, isLoading, error, handleAddToCart } = useContext(ProductContext);

    return (
        <div className="product-list">
            {error && <div>{error}</div>}
            {isLoading ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                products?.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            alt={product.title}
                            width={75}
                            height={75}
                            loading="lazy"
                        />
                        <h4>{product.title}</h4>
                        <p>
                            {product.description.length > 500
                                ? product.description.substring(0, 500) + "..."
                                : product.description}
                        </p>
                        <div className="product-action">
                            <span className="product-price">${product.price}</span>
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
