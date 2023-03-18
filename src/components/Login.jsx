import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      

      <Typography variant='h3'>Welcome to React</Typography>
      <TextField label='email' variant='standard' />
      <br></br>
      <TextField label='password' type={'password'} variant='standard' />
      <br></br>
      <br></br>
      <Button variant='contained' color='success'>Login</Button>
    </div>
  )
}

export default Login
