import { TextField , Button, Container } from '@mui/material'
import { useRef } from 'react'
import { useState } from 'react';
import { networkoperations } from './services/api-client.js';
export const Register = () =>{
    const [Message,setMessage] = useState('');
    const emailref = useRef(null);
    const nameref = useRef(null);
    const pwdref = useRef(null);
    const phoneref = useRef(null);
    const doregister = async () =>{
      
        const userinfo = {
            
            'email' : emailref.current.value,
            'name' : nameref.current.value,
            'phone' : phoneref.current.value,
            'password' : pwdref.current.value,
        }
        try{
        const response = await networkoperations.post('http://localhost:1234/register',userinfo);
        console.log('response',response);
        setMessage(response.data.message)
        console.log("userinfo",userinfo);
        }
        catch(err)
        {
            console.log('error occured',err);
        }
    }

   return (
   
       <Container>
        <p>{Message}</p>
        <TextField inputRef={emailref} id="outlined-basic" label="Email" variant="outlined" />
        <TextField inputRef={nameref} id="outlined-basic" label="name" variant="outlined" />
        <TextField inputRef={pwdref} id="outlined-basic" type ='password' label="password" variant="outlined" />
        <TextField inputRef={phoneref} id="outlined-basic" label="phone" variant="outlined" />
        <Button onClick ={doregister} variant="contained">register</Button>
       </Container>
      
   )
}