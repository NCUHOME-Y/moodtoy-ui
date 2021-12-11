import { Button, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import BgImg from '../assets/透明底2.png'
import LogoImg from '../assets/logo(白.png'
import Background from '../components/Background'
import { AuthedUser } from '../models'

const Welcome = () => {
  return (
    <>
      <Background src={BgImg} color="rgb(0, 2, 42)" />
      <Box
        maxWidth="sm"
        sx={{
          maxWidth: 400,
          m: 'auto',
        }}
      >
        <Stack
          sx={{
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={LogoImg}
            style={{
              maxWidth: 350,
              width: '90%',
              position: 'absolute',
              top: 3 * 8,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 5 * 8,
              '& .MuiButton-root': {
                width: 140,
                bgcolor: '#fff',
                fontSize: 18,
              },
              '& .MuiButton-root:hover': {
                bgcolor: '#fff',
              },
            }}
          >
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/login"
              sx={{ mr: 2 }}
            >
              登录
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/register"
              sx={{ ml: 2 }}
            >
              注册
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Welcome
