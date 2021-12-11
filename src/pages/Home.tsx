import { AppBar, Box, Button, IconButton, Stack, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import MoodDoll from '../components/MoodDoll'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import BgImg from '../assets/捏玩界面.png'
import Background from '../components/Background'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Doll } from '../models'
const Home = ({ doll }: { doll: Doll }) => {
  return (
    <>
      <Background src={BgImg} color="#eee" />

      <AppBar position="fixed" color="primary">
        <Toolbar variant="dense">
          <IconButton
            sx={{ color: '#fff' }}
            edge="start"
            aria-label="back"
            onClick={() => window.history.back()}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff', ml: 1 }} component={Link} to="/me">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Stack
        sx={{ alignItems: 'center', justifyContent: 'center', height: '96vh' }}
      >
        <Box sx={{ ml: 3 }}>
          <MoodDoll doll={doll} size={400} />
        </Box>
        <Box>
          <Button
            variant="contained"
            size="large"
            sx={{ m: 2 }}
            component={Link}
            to="/editor/happy"
          >
            开心
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ m: 2 }}
            component={Link}
            to="/editor/unhappy"
          >
            烦恼
          </Button>
        </Box>
      </Stack>
    </>
  )
}

export default Home
