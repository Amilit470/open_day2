import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <input  placeholder='username' />
      <br /><br />
      <input type="password" placeholder='password' />
      <br /><br />
      <button>Login</button>
      <br /><br /><br /><br />
      <Typography variant='h3'>Login Page</Typography>
      <br />
      <TextField variant='outlined' label='username'/> 
      <br /><br />
      <TextField variant='filled' label='password'/>
      <br /><br />
      <TextField variant='standard' label='email'/>
      <br /><br />
      <Button variant='contained'color='error'>Login</Button>&nbsp;
      <Button variant='text'color='secondary'>sign up</Button>&nbsp;
      <Button variant='oulined'color='success'>sign in</Button>
    
    </div>
      
  )
}

export default First
