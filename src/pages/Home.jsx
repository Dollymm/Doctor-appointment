import React from 'react'
import NavBar from '../component/mainPage/NavBar'
import ChildNav from '../component/mainPage/ChildNav'
import Center from '../component/mainPage/Center'
import Consult from '../component/health/Consult'
import Footer from './Footer'
const Home = () => {
  return (
    <><NavBar />
    <ChildNav />
    <Center/>
    <Consult/>
    <Footer/>
    </>
  )
}

export default Home