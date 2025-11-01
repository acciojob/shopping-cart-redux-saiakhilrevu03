import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addItem } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'React Book', price: 30 },
  { id: 2, name: 'Redux Guide', price: 25 },
  { id: 3, name: 'JavaScript T-Shirt', price: 20 },
];

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistProducts.length === 0 && <p>No items in wishlist.</p>}
      {wishlistProducts.map(p => (
        <div key={p.id} style={{ marginBottom: '1rem' }}>
          <strong>{p.name}</strong> - ${p.price}
          <button style={{ marginLeft: '1rem' }} onClick={() => dispatch(addItem(p))}>
            Add to Cart
          </button>
          <button style={{ marginLeft: '1rem' }} onClick={() => dispatch(removeFromWishlist(p.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
