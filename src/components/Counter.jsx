import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setCount]= useState(0)
    const addValue =() =>{
        console.log("add byn clicked")
        setCount(++count)
    }
    const decValue=() =>{
        console.log("dec byn clicked")
        setCount(--count)
    }
  return (
    <div style={{textAlign:'center',marginTop:'5%'}}>
        <Typography variant='h3'>{count}</Typography>
        <br />
        <Button variant='contained' onclick ={addValue}>+</Button>&nbsp;&nbsp;
        <Button variant='contained'onclick ={decValue}>-</Button>

    </div>
  )
}

export default Counter
