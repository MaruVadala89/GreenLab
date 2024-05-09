import './App.css'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import IntemListContainer from './components/IntemListContainer/IntemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import NavBoot from './components/NavBoot/NavBoot'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contacto from './components/Contacto/Contacto'


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBoot />

          <Routes>
            <Route path='/' element={<IntemListContainer />} />
            <Route path='/:categoryId' element={<IntemListContainer />} />
            <Route path='/item/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='*' element={<Error />} />
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
