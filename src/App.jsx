/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Blogs />
      <Footer />
    </>
  )
}

export default App
