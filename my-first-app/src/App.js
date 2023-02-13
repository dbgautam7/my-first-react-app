import './App.css';
import React, { useState } from 'react';
import Login from './containers/Login';
import Register from './containers/Register'
import Products from './containers/Products';
import Test from './test';
import Counter from './counter';
import Navbar from './components/navbar';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart , faCartShopping, faHeart} from '@fortawesome/free-solid-svg-icons'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  
  
  return (
    
    <><BrowserRouter>
      <Routes>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/navbar' element={<Navbar />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

