import React, { Fragment } from 'react';
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import Careers from './pages/Careers/Careers';
import Products from './pages/Products/Products';
import Signup from './pages/Signup/Signup';
import Projects from './pages/Projects/Projects';
import CartProducts from './pages/Products/CartProducts';

const App = () => {
  return (
    <Fragment>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog' element={<Blog />} />
    <Route path='/careers' element={<Careers />} />
    <Route path='/products' element={<Products />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/cartProducts' element={<CartProducts/>}/>
    </Routes>
    </Fragment>
  )
}

export default App