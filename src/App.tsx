import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'

import Footer from './components/Footer'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify'
import New from './pages/New'
import NewPage2 from './pages/NewPage2'
import Facilities from './pages/Facilities'
import Apartment from './pages/Apartment'
import Homepark from './pages/Homepark'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Salesoffices from './pages/Salesoffices'


function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
    
    <BrowserRouter> 
    <Header/>
    <ToastContainer/>
    
    
  

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/newspage2' element={<NewPage2/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/apartment' element={<Apartment/>}/>
      <Route path='/hompark' element={<Homepark/>}/>
      <Route path='salesoffices' element={<Salesoffices/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>

    
    </>
  )
}

export default App
