import './App.css'
import IntemListContainer from './components/IntemListContainer/IntemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import NavBoot from './components/NavBoot/NavBoot'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contacto from './components/Contacto/Contacto'
import Header from './components/Header/Header';


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>

          <Header/>
          
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
