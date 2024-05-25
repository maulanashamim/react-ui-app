import React from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';

function App() {
  const productList = [
    {
      price:99999,
      name:"Iphone 10S MAX",
      quantity: 0,
    },

    {
      price:9999,
      name:"Redmi note 10 MAX",
      quantity: 0, 
    },
  ]
  
  return (
  <>
<Navbar/>
<ProductList productList={productList}/>


  </>
  );
}

export default App;
