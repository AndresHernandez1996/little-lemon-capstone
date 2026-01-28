import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Heaader'
import Main from './components/Layout/Main'
import Nav from './components/Layout/Nav'

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />
    </>
  )
}

export default App
