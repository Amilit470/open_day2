import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,setName] = useState("Amilit");
    var [input,setInput]=useState();
    const changename =() => {
        console.log("botton clicked");
        setName(input);
    };
    const inputHandler =(e) =>{
      console.log(e.target.value)
      setInput(e.target.value)
    }
    
  return (
    <div style={{textAlign:'center',marginTop:'5%'}}>
    <Typography variant='h3'>Hello {name}</Typography>
    <br /><br />
        <TextField 
           variant='outlined'
           label='enter your name'
           onChange={inputHandler}/>
           <br /><br />
    <Button variant='contained' onClick={changename}>change
    <br /><br />

    
    </Button>
    <br /><br />
    
    </div>
  )
}

export default StateBasics
