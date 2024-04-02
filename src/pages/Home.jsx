import React from 'react'
import NavBar from '../component/mainPage/NavBar'
import ChildNav from '../component/mainPage/ChildNav'
import Center from '../component/mainPage/Center'
import Consult from '../component/health/Consult'
import Footer from './Footer'
import Doctors from '../component/health/Doctors'
const Home = () => {
  return (
    <><NavBar />
    <ChildNav />
    <Center/>
    <Consult/>
    <Doctors/>
    <Footer/>
    </>
  )
}

export default Home