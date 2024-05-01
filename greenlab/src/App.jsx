import './App.css'
import IntemListContainer from './components/IntemListContainer/IntemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
 

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<IntemListContainer/>}/>
      <Route path='/:categoryId' element={<IntemListContainer/>}/>
      <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>

    </Routes>
    
    
    </BrowserRouter>

      
    </>
  )
}

export default App
