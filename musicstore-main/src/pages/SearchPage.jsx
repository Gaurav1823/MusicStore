import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs"
import { networkoperations} from "../components/services/api-client.js";
import { Player } from "../components/Player";

export const SearchPage = ()=>{
    const [allSongs,setSongs]=useState([])
    const[flag,setFlag]=useState(false)
    const [song,setSong]=useState(null)
    const togglePlayer=(flag,songarg)=>{
        setSong(songarg)
        setFlag(flag)
    }
    const loadSongs=async ()=>{
        setSongs(await networkoperations.getSongs('Latest Songs'))
    }
    useEffect(()=>{
        loadSongs()
    },[])
    const getArtistName=async(ArtistName)=>{
        console.log('Rec artist name: ',ArtistName);
        setSongs(await networkoperations.getSongs(ArtistName))
    }
    const jsx=<>
    <Search fn={getArtistName}/>
        <Songs fn={togglePlayer} allsongs={allSongs}/>
    </>
    return(<div className="container">
        <h1 className="alert alert-info text-center">MUSIC STORE</h1>
        {/* <Player/> */}
        {flag?<Player fn={togglePlayer} song={song}/>:jsx}
        </div>)
}
// import React from 'react'
// import { Register } from '../components/Register.jsx'
// import { Button } from '@mui/material'
// import { Login } from '../components/Login.jsx';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// export const SearchPage = () => {
//   return (
//     <>
//     <Router>
//     <Button variant="contained"><Link to='/register'>Register</Link></Button>
//     <p></p>
//     <Button variant="contained"><Link to='/login'>Login</Link></Button>
//     <p></p>
//     <Button variant="contained"><Link to='/'>Home</Link></Button>
//     <Routes>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/register" element={<Register/>}/>
//           <Route path="/" element="Hello and welcome"/>
//     </Routes>
//     </Router>
    
//     {/* <Login/> */}
//    </>
//   )
// }