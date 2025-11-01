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
        <div key={p.id} className="custom-card card mb-3">
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">${p.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addItem(p))}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-outline-secondary ml-2"
              onClick={() => toggleWishlist(p.id)}
            >
              {wishlist.includes(p.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
