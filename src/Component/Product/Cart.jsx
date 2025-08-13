import React from 'react';

export default function Cart({ product, setProduct }) {
    console.log("Items added in the cart are as follows: ", product);

    return (
        <div className='cart'>
            <h3>Cart</h3>
            {product.length > 0 ?
                <div className='cart-list'>
                    {product?.map(items => (
                        <div className='cart-item' key={items.id}>
                            <img src={items.image} alt={items.title} width={50} height={50} />
                            <p>{items.title}</p>
                        </div>
                    ))}
                </div>
                :
                <p>Your cart is empty.</p>
            }
        </div>
    )
}
