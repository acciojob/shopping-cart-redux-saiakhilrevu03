import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';

const products = [
  { id: 1, name: 'React Book', price: 30 },
  { id: 2, name: 'Redux Guide', price: 25 },
  { id: 3, name: 'JavaScript T-Shirt', price: 20 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist(id));
    }
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: '1rem' }}>
          <strong>{p.name}</strong> - ${p.price}
          <button style={{ marginLeft: '1rem' }} onClick={() => dispatch(addItem(p))}>Add to Cart</button>
          <button style={{ marginLeft: '1rem' }} onClick={() => toggleWishlist(p.id)}>
            {wishlist.includes(p.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
