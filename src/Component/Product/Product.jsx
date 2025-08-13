import React, { useState } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import './product.css';

export default function Product() {
    const [cartItems, setCartItems] = useState([]);
    
    return (
        <div className='product'>
            <ProductList setCartItems={setCartItems} />
            <Cart setProduct={setCartItems} product={cartItems} />
        </div>
    )
}
