import React, { useEffect, useState } from 'react'
import { PRODUCT_URI } from '../../Helpers/action_url';

export default function ProductList({ setCartItems }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(PRODUCT_URI);
                const response = await data.json();
                setProducts(response);
                setIsLoading(false)
            }
            catch (err) {
                console.error(`Thrown error as: ${err}`)
                setIsLoading(false)
                setError(err);
            }
        }
        fetchData();
    }, [])

    const handleAddToCart = (product) => {
        console.log("Product", product);

        setCartItems((prev) => {
            const existingProductsInCart = prev.find(item => item.id === product.id)

            if (existingProductsInCart) {
                return prev.map(item => (
                    item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                ))
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        })
    }
    return (
        <div className='product-list'>
            {error && <div>{error}</div>}
            {isLoading ?
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div> :
                products?.map(product => (
                    <div key={product.id} className='product-card'>
                        <img src={product.image} alt={product.title} width={75} height={75} />
                        <h4>{product.title}</h4>
                        <p>{product.description.length > 500 ? product.description.substring(0, 500) + "..." : product.description}</p>
                        <div className='product-action'>
                            <span className='product-price'>${product.price}</span>
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
        </div>
    )
}
