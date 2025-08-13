import React from 'react';

export default function Cart({ product, setProduct }) {
    return (
        <div className='cart'>
            <h3>Cart</h3>
            {product.length > 0 ?
                <div className='cart-list'>
                    {product?.map(items => (
                        <div className='cart-item' key={items.id}>
                            <img src={items.image} alt={items.title} width={50} height={50} />
                            <div className='cart-info'>
                                <p className="cart-title">{items.title}</p>
                                <p className="cart-qty">QTY: {items.quantity}</p>
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
