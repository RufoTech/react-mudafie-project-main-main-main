import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import CreativeBuild from './components/CreativeBuild'
import Shirketler from './components/Shirketler'
import Statics from './components/Statics'
import Gallery from './components/Gallery'
import Family from './components/Family'
import Rooms from './components/Rooms'
import Family2 from './components/Family2'
import News from './components/News'
import Master from './components/Master'
import Certificat from './components/Certificat'
import Footer from './components/Footer'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter> 
    
    </BrowserRouter>


     <Header/>
    <Introduction/>
   <CreativeBuild/>
   <Shirketler/>
     <Statics/>
     <Gallery/>
     <Family/>
     <Rooms/>
     <Family2/>
     <News/>
     <Master/>
     <Certificat/>
     <Footer/>
    </>
  )
}

export default App
