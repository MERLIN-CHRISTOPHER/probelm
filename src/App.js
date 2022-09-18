
import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Service } from './components/pages/service';
import Products from './components/pages/products';
import SignUp from './components/pages/singnup';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Navbar/>}>


        {/* <Navbar /> */}
          <Route index element={<Home />} >
            
          </Route>
            <Route  path='/service' element={<Service/>} />
          <Route  path='/products' element={<Products />} />
          <Route path='/singnup' element={<SignUp />}  /> 
          </Route>

        </Routes> 
      </BrowserRouter>
      
    </>
  );
}

export default App;