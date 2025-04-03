import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Features from './Pages/Features';
import Community from './Pages/Community';
import Blog from './Pages/Blog';
import Pricing from './Pages/Pricing';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <div >

      <Router>
          <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
      </Router>
      

      
    </div>
  )
}

export default App