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
        <div key={item.id} style={{ marginBottom: '1rem' }}>
          <strong>{item.name}</strong> - ${item.price} x {item.quantity}
          <button onClick={() => dispatch(increaseQuantity(item.id))} style={{ marginLeft: '0.5rem' }}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))} style={{ marginLeft: '0.5rem' }}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: '0.5rem' }}>Remove</button>
        </div>
      ))}
      {items.length > 0 && (
        <>
          <p>Total: ${total.toFixed(2)}</p>
          <p>Discount ({coupon || 'None'}): -${discountAmount.toFixed(2)}</p>
          <p><strong>Final Total: ${finalTotal.toFixed(2)}</strong></p>
          <input
            type="text"
            placeholder="Coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button onClick={handleApplyCoupon}>Apply Coupon</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button onClick={() => dispatch(clearCoupon())}>Clear Coupon</button>
        </>
      )}
    </div>
  );
};

export default Cart;
