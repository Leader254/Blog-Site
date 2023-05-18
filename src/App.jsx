/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import LandingPage from './pages/Landing-Page'
import Blogs from './components/Blogs'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
