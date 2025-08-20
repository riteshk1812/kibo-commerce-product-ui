import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export default function Cart() {
    const { cartItems, handleRemove} = useContext(ProductContext)
    return (
        <div className='cart'>
            <h3>Cart</h3>
            {cartItems.length > 0 ?
                <div className='cart-list'>
                    {cartItems?.map(items => (
                        <div className='cart-item' key={items.id}>
                            <img src={items.image} alt={items.title} width={50} height={50} />
                            <div className='cart-info'>
                                <p className="cart-title">{items.title}</p>
                                <p className="cart-qty">QTY: {items.quantity}</p>
                                <span style={{cursor: 'pointer'}} onClick={() => handleRemove(items.id)}>❌</span>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <p>Your cart is empty.</p>
            }
        </div>
    )
}
