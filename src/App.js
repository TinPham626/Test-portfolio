import React from 'react'
import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Portfolio from './pages/Portfolio'
import Contacts from './pages/Contacts'

export default function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </div>
    </>
  )
}
