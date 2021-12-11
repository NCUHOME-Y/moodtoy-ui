import { Avatar, Button, Stack, Typography } from '@mui/material'
import Background from '../components/Background'
import BgImg from '../assets/捏玩界面.png'
import BackBar from '../components/BackBar'
import { Box } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../models'
import ImgAvatar from '../assets/初始.png'

const Me = ({ user, logout }: { user: User; logout: () => void }) => {
  const navigate = useNavigate()
  return (
    <>
      <BackBar />
      <Background src={BgImg} color="#eee" />
      <Stack
        maxWidth="xs"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '73vh',
          '& .MuiButton-root': {
            m: 1,
            backgroundColor: '#fff',
          },
          '& .MuiButton-root:hover': {
            backgroundColor: '#fff',
          },
        }}
        spacing={2}
      >
        <Avatar
          sx={{ width: 8 * 14, height: 8 * 14, bgcolor: '#fff' }}
          src={ImgAvatar}
        >
          H
        </Avatar>
        <Typography variant="h5">{user.username}</Typography>
        <Box
          sx={{
            '& .MuiButton-root': {
              fontSize: 22,
              height: 64,
            },
          }}
        >
          <Button variant="outlined" size="large">
            MOOD 周报
          </Button>
          <Button variant="outlined" size="large" component={Link} to="/diy">
            更换装扮
          </Button>
        </Box>
        <Box
          sx={{
            '& .MuiButton-root': {
              fontSize: 16,
            },
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              logout()
              navigate('/')
            }}
          >
            退出登录
          </Button>
          <Button variant="outlined">设置更改</Button>
          <Button variant="outlined">联系我们</Button>
        </Box>
      </Stack>
    </>
  )
}

export default Me
