import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}><Link to="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          </Typography>
          <Button color="inherit"><Link to="/login" style={{color:'white',textDecoration:'none'}}>Login</Link></Button>
          <Button color='inherit'><Link to="/signup" style={{color:'white',textDecoration:'none'}}>Sign up</Link></Button>
        </Toolbar>
      </AppBar>
      </Box>
   )  
 }

export default Navbar
