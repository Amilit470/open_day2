import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{flexGrow:1}}>
            My App
          </Typography>
          <Button >
            <Link to={'/'}style={{textDecoration:"none",color:'white'}} >Login
            </Link>
          </Button>
          <Button>
            <Link  to={'/reg'}style={{textDecoration:"none",color:'white'}}>Registration
            </Link>
          </Button>
          <Button>
            <Link  to={'/tabs'}style={{textDecoration:"none",color:'white'}}>Tabs
            </Link>
          </Button>
          <Button>
          <Link to={'/'}style={{textDecoration:"none",color:'white'}} >Log Out
          </Link>
          </Button>
          <Button>
            <Link to={'/s'}style={{textDecoration:"none",color:'white'}} >State
            </Link>
          </Button>
          
          <Button>
            <Link to={'/c'}style={{textDecoration:"none",color:'white'}} >Counter
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
