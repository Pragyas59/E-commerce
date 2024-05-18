import React, { useContext } from 'react';
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContest';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {getTotalCartAmount, all_product, cartItems, RemoveFromCart } = useContext(ShopContext);

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
            <div className="cartitems-down">
                <div className="cartitem-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                     <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                     <p>Free</p>

                     </div>
                     <hr />
                     <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                     </div>
                    </div>
                    <button>Proceed To checkout</button>

                </div>
                <div className="cartitems-promocode">
                    <p>If You Have Any Promo Code,Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
