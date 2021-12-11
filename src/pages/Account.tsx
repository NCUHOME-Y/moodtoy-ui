import {
  Avatar,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import Background from '../components/Background'
import { User } from '../models'
import BgImg from '../assets/捏玩界面.png'
import BackBar from '../components/BackBar'
import { useState } from 'react'

const Account = ({ user }: { user: User }) => {
  return (
    <>
      <Background src={BgImg} color="#eee" />
      <BackBar />
      <Container maxWidth="xs" sx={{ pt: 8 }}>
        <Stack spacing={2}>
          <Paper sx={{ display: 'flex' }}>
            <Avatar src={user.avatar} sx={{ height: 8 * 14, width: 8 * 14 }} />
            <Typography variant="h4">{user.username}</Typography>
          </Paper>
        </Stack>
      </Container>
    </>
  )
}

export default Account
