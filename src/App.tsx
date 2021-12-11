import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthedUser } from './models'
import Account from './pages/Account'
import Editor from './pages/Editor'
// import Home from './pages/Home'
import Login from './pages/Login'
import Me from './pages/Me'
import MoodDollDiy from './pages/MoodDollDiy'
import Welcome from './pages/Welcome'

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
    user: { user_id: '', username: 'xx' },
    token: '',
  }))

  const navigate = useNavigate()

  const afterLogin = (a: AuthedUser, isRegister?: boolean) => {
    setAuthedUser(a)
    if (isRegister) {
      navigate('/diy')
    } else {
      navigate('/')
    }
  }
  const user = authedUser.user
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ ml: 'auto', mr: 'auto' }} maxWidth="sm">
        <Routes>
          <Route path="/" element={<Welcome auth={authedUser} />} />
          <Route path="/login" element={<Login afterLogin={afterLogin} />} />
          <Route
            path="/register"
            element={<Login afterLogin={afterLogin} isRegister />}
          />
          <Route path="/diy" element={<MoodDollDiy />} />
          <Route path="/editor/happy" element={<Editor mood="happy" />} />
          <Route path="/editor/unhappy" element={<Editor mood="unhappy" />} />
          <Route path="/me" element={<Me user={user} />} />
          <Route path="/account" element={<Account user={user} />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
