import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { applyCoupon, clearCoupon } from '../redux/discountSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const discountPercent = useSelector(state => state.discount.discountPercent);
  const coupon = useSelector(state => state.discount.coupon);
  const error = useSelector(state => state.discount.error);

  const [couponCode, setCouponCode] = useState('');

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (total * discountPercent) / 100;
  const finalTotal = total - discountAmount;

  const handleApplyCoupon = () => {
    dispatch(applyCoupon(couponCode));
    setCouponCode('');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map(item => (
        <div key={item.id} className="custom-card card mb-3">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">${item.price} x {item.quantity}</p>
            <button
              className="btn btn-secondary mr-2"
              onClick={() => dispatch(increaseQuantity(item.id))}
            >
              +
            </button>
            <button
              className="btn btn-secondary mr-2"
              onClick={() => dispatch(decreaseQuantity(item.id))}
            >
              -
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {items.length > 0 && (
        <div className="mt-3">
          <p>Total: ${total.toFixed(2)}</p>
          <p>Discount ({coupon || 'None'}): -${discountAmount.toFixed(2)}</p>
          <p><strong>Final Total: ${finalTotal.toFixed(2)}</strong></p>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className="btn btn-primary mr-2" onClick={handleApplyCoupon}>
            Apply Coupon
          </button>
          <button className="btn btn-outline-secondary" onClick={() => dispatch(clearCoupon())}>
            Clear Coupon
          </button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Cart;
