import { Alert, Button, Container, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import Background from '../components/Background'
import BgImg from '../assets/登录或注册.png'
import Logo from '../assets/MOOD.png'
import BackBar from '../components/BackBar'
import { AuthedUser } from '../models'
import axios from 'axios'

const Login = ({
  isRegister,
  afterLogin,
}: {
  isRegister?: boolean
  afterLogin: (authedUser: AuthedUser, isRegister?: boolean) => void
}) => {
  const [auth, setAuth] = useState({ user_id: '', password: '' })
  const [username, setUsername] = useState('')
  const [passwordRepeated, setPasswordRepeated] = useState('')
  const size = isRegister ? 'small' : 'medium'
  const [errorMessage, setErrorMessage] = useState('')

  const register = async () => {
    try {
      await axios.post('/api/register', { ...auth, username })
      await login()
    } catch (e: any) {
      setErrorMessage(String(e.response.data.message || e))
    }
  }

  const login = async () => {
    try {
      const r = await axios.post('/api/login', auth)
      afterLogin(r.data as AuthedUser, isRegister)
    } catch (e: any) {
      console.log(e)
      setErrorMessage(String(e.response.data.message || e))
    }
  }

  return (
    <>
      <BackBar />
      <Background src={BgImg} color="#eee" />
      <Container maxWidth="sm">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            try {
              if (isRegister) {
                if (passwordRepeated !== auth.password) {
                  setErrorMessage('两次输入的密码不同！')
                  return
                }
                register()
              } else {
                login()
              }
            } catch {
              setErrorMessage('网络错误！')
            }
          }}
        >
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
              style={{
                width: '90%',
                maxWidth: 300,
                position: 'fixed',
                top: -24,
              }}
            />
            <TextField
              required
              label="用户ID"
              variant="outlined"
              type="text"
              onChange={(event) => {
                setAuth({ ...auth, user_id: event.target.value })
              }}
              size={size}
            />
            {isRegister && (
              <TextField
                required
                label="昵称"
                variant="outlined"
                type="text"
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
                size={size}
              />
            )}
            <TextField
              required
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
                required
                label="再次输入密码"
                variant="outlined"
                type="password"
                onChange={(event) => {
                  setPasswordRepeated(event.target.value)
                }}
                size={size}
              />
            )}
            {errorMessage && (
              <Alert severity="error" sx={{ position: 'absolute', mt: 33 }}>
                {errorMessage}
              </Alert>
            )}
            <Button
              variant="contained"
              size="large"
              sx={{ width: 150, position: 'absolute', mt: 40 }}
              type="submit"
            >
              {isRegister ? '注册' : '登录'}
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  )
}

export default Login
