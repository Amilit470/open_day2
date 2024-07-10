import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
      <Typography variant='h3'>Registration Form</Typography>
      <br /><br />
      <TextField variant='outlined' label='Name'/> 
      <br /><br />
      <TextField variant='filled' label='Age'/> 
      <br /><br />
      <TextField variant='standard' label=' Place'/> 
      <br /><br />
      <TextField variant='filled' label='Department'/> 
      <br /><br />
      <TextField variant='outlined' label='email'/> 
      <br /><br />
      <TextField variant='outlined' label='password'/> 
      <br /><br />
      <Button variant='contained'>Submit</Button>
      

    </div>
  )
}

export default Registration
