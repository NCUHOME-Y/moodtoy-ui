import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useLayoutEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { AuthedUser, Doll } from './models'
import Account from './pages/Account'
import Editor from './pages/Editor'
import Home from './pages/Home'
import Login from './pages/Login'
import Me from './pages/Me'
import MoodDollDiy from './pages/MoodDollDiy'
import Welcome from './pages/Welcome'
import BlankImg from './assets/初始.png'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0,2,53)',
    },
    secondary: {
      main: '#ff1744',
    },
  },
  shape: {
    borderRadius: 12,
  },
})

const App = () => {
  const [authedUser, setAuthedUser] = useState<AuthedUser>(() => ({
    user: { user_id: '', username: '' },
    token: '',
  }))
  const [doll, setDoll] = useState<Doll>(() => {
    return {
      base: BlankImg,
    }
  })

  const navigate = useNavigate()

  useLayoutEffect(() => {
    ;(window as any).axios = axios
    const s = localStorage.getItem('user')
    if (s) {
      const j = JSON.parse(s) as AuthedUser
      setAuthedUser(j)
      axios.defaults.headers.common['Authorization'] = `Bearer ${j.token}`
    }
  }, [])

  const afterLogin = (a: AuthedUser, isRegister?: boolean) => {
    setAuthedUser(a)
    axios.defaults.headers.common['Authorization'] = `Bearer ${a.token}`
    localStorage.setItem('user', JSON.stringify(a))
    if (isRegister) {
      navigate('/diy')
    } else {
      navigate('/home')
    }
  }

  const user = authedUser.user
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ ml: 'auto', mr: 'auto' }} maxWidth="sm">
        <Routes>
          <Route
            path="/"
            element={
              authedUser.token === '' ? (
                <Navigate to="/welcome" />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login afterLogin={afterLogin} />} />
          <Route
            path="/register"
            element={<Login afterLogin={afterLogin} isRegister />}
          />
          <Route path="/home" element={<Home doll={doll} />} />
          <Route
            path="/diy"
            element={
              <MoodDollDiy
                doll={doll}
                setDoll={(d) => {
                  localStorage.setItem('doll', JSON.stringify(d))
                  setDoll(d)
                }}
              />
            }
          />
          <Route path="/editor/happy" element={<Editor mood="happy" />} />
          <Route path="/editor/unhappy" element={<Editor mood="unhappy" />} />
          <Route
            path="/me"
            element={
              <Me
                user={user}
                logout={() => {
                  setAuthedUser({
                    user: { user_id: '', username: '' },
                    token: '',
                  })
                  localStorage.clear()
                }}
              />
            }
          />
          <Route path="/account" element={<Account user={user} />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
