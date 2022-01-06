import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route} from 'react-router-dom';
import About from './myComponents/about/About';
import GrowthChartToolPage from './myComponents/growthChartTool/GrowthChartToolPage';
import HomePage from './myComponents/home/HomePage';
import Navbar from './myComponents/common/Navbar';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/growthCalculator' element={<GrowthChartToolPage/>}></Route>
        <Route exact path='/about' element={< About/>}></Route>
      </Routes>
   </Router>
    
  )
  }
export default App