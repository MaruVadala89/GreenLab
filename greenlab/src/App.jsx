import './App.css'
import IntemListContainer from './components/IntemListContainer/IntemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
 

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<IntemListContainer/>}/>
      <Route path='/:categoryId' element={<IntemListContainer/>}/>

    </Routes>
    
    
    </BrowserRouter>

      
    </>
  )
}

export default App
