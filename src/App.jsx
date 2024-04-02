import './App.css'
import { Link, Routes, Route } from "react-router-dom"
import Blue from './components/Blue.jsx'
import Red from './components/Red.jsx'
import Home from './components/Home.jsx'

function App() {

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue />} />
          <Route path='/' element={<Home />} />
          <Route path='/red' element={<Red />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
