import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '2rem' }}>
      <div style={{ width: '30%' }}>
        <ProductList />
      </div>
      <div style={{ width: '30%' }}>
        <Cart />
      </div>
      <div style={{ width: '30%' }}>
        <Wishlist />
      </div>
    </div>
  );
}

export default App;
