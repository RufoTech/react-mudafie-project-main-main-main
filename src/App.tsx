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


function App() {
  

  return (
    <>
     <Header/>
    <Introduction/>
   <CreativeBuild/>
   <Shirketler/>
     <Statics/>
     <Gallery/>
     <Family/>
     <Rooms/>
    </>
  )
}

export default App
