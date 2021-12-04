import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Navigator from './components/Navigator'
import Account from './pages/Account'
import Home from './pages/Home'
import Login from './pages/Login'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ffe57f',
    },
    background: {
      default: '#262938',
      paper: '#373c4f',
    },
    error: {
      main: '#ef5350',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#42a5f5',
    },
    success: {
      main: '#66bb6a',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xs" sx={{ paddingTop: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Navigator />
      </Container>
    </ThemeProvider>
  )
}

export default App
