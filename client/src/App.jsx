import React from 'react'
import NavBar from "./components/NavBar"
import Home from './pages/Home';
import Footer from "./components/Footer"
import Result from "./pages/Result"
import BuyCredit from "./pages/BuyCredit"
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import { useContext } from 'react';
import { AppContext } from './context/appContext';
const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-indigo-50 to-orange-50">
      <NavBar />
      
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result" element={<Result />} />
        <Route path="buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;