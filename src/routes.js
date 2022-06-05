import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import FirstScreen from './pages/firstScreen/firstScreen.component';
import SecondScreen from './pages/secondScreen/secondScreen.component';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstScreen/>}/>
      <Route path=':userid' element={<SecondScreen />}/>
      <Route path=':userid' element={<SecondScreen />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default RoutesComponent