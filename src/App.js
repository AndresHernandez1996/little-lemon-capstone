import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Nav from './components/Layout/Nav'

function App() {
  return (
    <div className="page">
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />
    </div>
  )
}

export default App
