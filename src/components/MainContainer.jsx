import { Routes, Route } from "react-router-dom"
import Blue from './Blue.jsx'
import Red from './Red.jsx'
import Home from './Home.jsx'
import Green from './Green.jsx'
import Yellow from './Yellow.jsx'

const MainContainer = () => {
  return (
    <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue />} />
          <Route path='/green' element={<Green />} />
          <Route path='/' element={<Home />} />
          <Route path='/yellow' element={<Yellow />} />
          <Route path='/red' element={<Red />} />
        </Routes>
      </div>
  )
}

export default MainContainer