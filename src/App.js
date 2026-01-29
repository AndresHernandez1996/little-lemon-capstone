import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Nav from './components/Layout/Nav'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="page">
      <Header>
        <Nav />
      </Header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<div>Booking Page</div>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
