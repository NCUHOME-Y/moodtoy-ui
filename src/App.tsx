import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Box } from '@mui/system'
import { Routes, Route } from 'react-router-dom'
import Account from './pages/Account'
import Home from './pages/Home'
import Login from './pages/Login'
import Me from './pages/Me'
import MoodDollDiy from './pages/MoodDollDiy'
import Record from './pages/Record'
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ ml: 'auto', mr: 'auto' }} maxWidth="sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/record"
            element={
              <Record
                moods={[
                  {
                    date: new Date(),
                    graffiti_url:
                      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACgAKAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAABgIEBQMB/8QAMxAAAQMCBAQDBAsAAAAAAAAAAQIDBAARBQYSIRMxQaFRgbEiQnGRFBUjJCU1YnOywfL/xAAYAQEAAwEAAAAAAAAAAAAAAAABAAIDBP/EACMRAAIBAgQHAAAAAAAAAAAAAAABAhESQmGh0QMTMkFRUpH/2gAMAwEAAhEDEQA/AHBU7GlYg9GTKjps8sai2gAC5A6E1wcVm5mRZ7FcOW3vYNw7Eedz6VtOQZicQW+iSrTxVK0FZsRflyqchl5yQko1gAcxvbuK1TyGhguKze44kR8Uw1CTtZyKlZv5EUMSc4MOKDuKwFbWs1DCD3JrfaakJWFLceUOoP8Ao1XWp4uqSH3wQdkjUf6NN2RKFCJKzg9iDA+uYAYLidbaogKym++4PXfpXtasIPiU3rceUNQuFJVbuKKrJg0ZD82SJjwVhkQr4qxcunc6jzGr4VXenZlVIPHy9HCd7KRKBJHjbWPWmsreVLWheHWb1n7UrSQd+dqrzEAyhaOpyyfd8PlRcdUZxWFa7i2JmZQ4Po2XYzn7kpKT5DWainEsw8QiRl2Kg/plAm/w1imiMVIdGmEtF+ZNgOwoOkOn7itRJtc6relql2RbmR9FruLkTEcfViMdCcvxOGXE3WZQ1AX3NtZ5b/KimyMlPFQTGDZvz8O1FFTKc4vCl93MCRimGomOqMLFOIHVXKUjnfp7VV38ztOSykYTjrZFwdUBBSbdblVeUVlVnI5T8kxmxiO5+UY87qHuQUW7KqDeZ4Tqz+C5gRbf24iQP5UUUXMl3Er1HeJmiIma1HbwbHtS3Ep1mKNO56kK5C9FFFWTYqUu7P/Z',
                    id: 0,
                    text: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACgAKAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAABgIEBQMB/8QAMxAAAQMCBAQDBAsAAAAAAAAAAQIDBAARBQYSIRMxQaFRgbEiQnGRFBUjJCU1YnOywfL/xAAYAQEAAwEAAAAAAAAAAAAAAAABAAIDBP/EACMRAAIBAgQHAAAAAAAAAAAAAAABAhESQmGh0QMTMkFRUpH/2gAMAwEAAhEDEQA',
                    type: 'bad',
                  },
                ]}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login isRegister />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/diy" element={<MoodDollDiy />} />
          <Route path="/me" element={<Me />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
