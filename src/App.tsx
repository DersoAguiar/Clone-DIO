import React from "react"
import {
  BrowserRouter as Router, 
  Routes, 
  Route,  
} from "react-router-dom"

import { Home } from './Pages/Home/index'
import { Login } from './Pages/Login/index'
import { Feed } from './Pages/Feed/index'
import { Cadastro } from "./Pages/Cadastro";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cadastro' element={<Cadastro />}/>  
        <Route path='/login' element={<Login />}/> 
        <Route path='/feed' element={<Feed />}/>     
      </Routes>
    </Router>
     
  );
}

export default App;
