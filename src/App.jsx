import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import AboutUs from './components/aboutUs'
import ContactUs from './components/contactUs'
import Foter from './components/footer'
import Products from './components/products'

function App() {

  return (
    <>
    
      <Header/>
      <Home/>
      <AboutUs/>
      <Products/>
      <ContactUs/>
      <Foter/>
      
    </>
  )
}
        

export default App
