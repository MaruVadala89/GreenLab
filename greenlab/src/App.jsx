import './App.css'
import IntemListContainer from './components/IntemListContainer/IntemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import NavBoot from './components/NavBoot/NavBoot'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart';

function App() {
 

  return (
    <>

    <BrowserRouter>
    <CartProvider>
      <NavBoot/>
      

    <Routes>
      <Route path='/' element={<IntemListContainer/>}/>
      <Route path='/:categoryId' element={<IntemListContainer/>}/>
      <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
      <Route path='/Cart' element={<Cart />} />

    </Routes>

    <Footer/>

    </CartProvider>
    
    
    </BrowserRouter>

      
    </>
  )
}

export default App
