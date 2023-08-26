import React from 'react'
import { Register } from '../components/Register.jsx'
import { Button } from '@mui/material'
import { Login } from '../components/Login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { SearchPage } from './SearchPage.jsx';

export const UserPage = () => {
  return (
    <>
    <Router>
    <Button variant="contained"><Link to='/register'>Register</Link></Button>
    <p></p>
    <Button variant="contained"><Link to='/login'>Login</Link></Button>
    <p></p>
    {/* <Button variant="contained"><Link to='/'>Home</Link></Button> */}
    <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          {/* <Route path="/" element={<SearchPage/>}/> */}
    </Routes>
    </Router>
    
    {/* <Login/> */}
   </>
  )
}