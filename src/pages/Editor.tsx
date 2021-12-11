import {
  Box,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import BackBar from '../components/BackBar'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'
import BgHappy from '../assets/开心界面.png'
import BgUnhappy from '../assets/烦恼界面.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Editor = ({ mood }: { mood: 'happy' | 'unhappy' }) => {
  const [state, setState] = useState(() => ({
    title: '',
    text_content: '',
    time: new Date(),
    feeling: mood === 'happy' ? 'good' : 'bad',
  }))

  const navigate = useNavigate()

  const submit = async () => {
    await axios.post('/api/diary', state)
    navigate('/home')
  }
  return (
    <>
      <BackBar />
      <Container maxWidth="xs" sx={{ pt: 8 }}>
        <Stack sx={{ alignItems: 'center' }} spacing={2}>
          <Paper
            sx={{
              width: '100%',
              height: `calc(98vh - ${8 * 10}px)`,
              p: 2,
              background: `url(${
                mood === 'unhappy' ? BgUnhappy : BgHappy
              }) #f7f7f7`,
              backgroundBlendMode: 'normal',
            }}
          >
            <InputBase
              placeholder="标题"
              sx={{
                fontSize: 28,
                fontWeight: 600,
              }}
              value={state.title}
              onChange={(e) => {
                setState({ ...state, title: e.target.value })
              }}
            />
            <Typography variant="caption">
              {state.time.toLocaleString()}
            </Typography>
            <Divider />
            <Box
              sx={{
                height: `calc(98vh - ${8 * 30}px)`,
                overflowY: 'auto',
                overflowX: 'hidden',
              }}
            >
              <InputBase
                placeholder="内容"
                multiline
                sx={{ m: 1, width: '100%' }}
                value={state.text_content}
                onChange={(e) =>
                  setState({ ...state, text_content: e.target.value })
                }
              />
            </Box>
            <Stack sx={{ alignItems: 'center' }}>
              <IconButton onClick={() => submit()}>
                <CheckIcon sx={{ fontSize: 48 }} />
              </IconButton>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </>
  )
}

export default Editor
