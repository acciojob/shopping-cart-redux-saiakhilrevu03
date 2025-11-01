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
              className="btn btn-danger ml-2"
              onClick={() => dispatch(removeFromWishlist(p.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
