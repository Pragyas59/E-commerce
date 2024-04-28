import React, { useContext } from 'react';
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContest';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const { all_product, cartItems, RemoveFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div className="cartitems-format" key={e.id}>
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img className='carticon-remove-icon' src={remove_icon} onClick={() => { RemoveFromCart(e.id) }} alt="" />
                        </div>
                    );
                }
                return null; 
            })}
        </div>
    );
};

export default CartItem;
