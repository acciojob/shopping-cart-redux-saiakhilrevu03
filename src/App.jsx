import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <div className="text-center w-100">
            <h1>Shopping Cart</h1>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
          <div className="col-md-4">
            <Wishlist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
