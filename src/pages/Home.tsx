import React from 'react'
import Introduction from '../components/Introduction'
import CreativeBuild from '../components/CreativeBuild'
import Shirketler from '../components/Shirketler'
import Statics from '../components/Statics'
import Gallery from '../components/Gallery'
import Family from '../components/Family'
import Family2 from '../components/Family2'
import Rooms from '../components/Rooms'
import News from '../components/News'
import Master from '../components/Master'
import Certificat from '../components/Certificat'

const Home:React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default Home