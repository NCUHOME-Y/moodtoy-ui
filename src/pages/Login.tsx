import { Alert, Button, Container, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import Background from '../components/Background'
import BgImg from '../assets/登录或注册.png'
import Logo from '../assets/MOOD.png'
import BackBar from '../components/BackBar'

const Login = ({ isRegister }: { isRegister?: boolean }) => {
  const [auth, setAuth] = useState({ id: '', password: '' })
  const size = isRegister ? 'small' : 'medium'
  const [errorMessage] = useState('')

  return (
    <>
      <BackBar />
      <Background src={BgImg} color="rgb(238, 238, 238)" />
      <Container maxWidth="sm">
        <Stack
          sx={{
            alignItems: 'center',
            mt: 20,
            '& .MuiTextField-root': {
              width: '90%',
              maxWidth: 300,
              mt: isRegister ? 3 : 4,
            },
            '& .MuiInputBase-root': {
              backgroundColor: '#fff',
            },
          }}
        >
          <img
            src={Logo}
            style={{ width: '90%', maxWidth: 300, position: 'fixed', top: -24 }}
          />
          <TextField
            label="用户ID"
            variant="outlined"
            type="text"
            onChange={(event) => {
              setAuth({ ...auth, id: event.target.value })
            }}
            size={size}
          />
          <TextField
            label="密码"
            variant="outlined"
            type="password"
            onChange={(event) => {
              setAuth({ ...auth, password: event.target.value })
            }}
            size={size}
          />
          {isRegister && (
            <TextField
              label="再次输入密码"
              variant="outlined"
              type="password"
              onChange={(event) => {
                setAuth({ ...auth, password: event.target.value })
              }}
              size={size}
            />
          )}
          {errorMessage && (
            <Alert severity="error" sx={{ position: 'absolute', mt: 28 }}>
              {errorMessage}
            </Alert>
          )}
          <Button
            variant="contained"
            size="large"
            sx={{ width: 150, position: 'absolute', mt: 40 }}
          >
            {isRegister ? '注册' : '登录'}
          </Button>
        </Stack>
      </Container>
    </>
  )
}

export default Login
