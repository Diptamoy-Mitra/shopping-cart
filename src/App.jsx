import { useState } from 'react'
import {  BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import store from './store/store'
import { Provider }  from 'react-redux';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {/* <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>

        </Router> */}




        {/* FOR REDUX */}

        <Provider store={store}>
          <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>

        </Router>

        </Provider>


      </div>
    </>
  )
}

export default App
