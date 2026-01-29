import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Nav from './components/Layout/Nav'
import Booking from './components/Pages/Booking'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'

const ScrollToHash = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    const target = document.getElementById(hash.replace('#', ''))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash, pathname])

  return null
}

function App() {
  return (
    <div className="page">
      <Header>
        <Nav />
      </Header>

      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
      <Analytics />
    </div>
  )
}

export default App
