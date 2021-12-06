import { Avatar, Button, Container, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock'

const Login = () => {
  const [auth, setAuth] = useState({ id: '', password: '' })
  return (
    <Container maxWidth="sm">
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          '& .MuiTextField-root': { width: '90%', maxWidth: 300 },
        }}
        spacing={4}
      >
        <Avatar
          sx={{
            bgcolor: 'secondary.main',
            transform: 'scale(1.5)',
            mt: 4,
            mb: 1,
          }}
        >
          <LockIcon />
        </Avatar>
        <TextField
          label="用户ID"
          variant="outlined"
          type="text"
          onChange={(event) => {
            setAuth({ ...auth, id: event.target.value })
          }}
        />
        <TextField
          label="密码"
          variant="outlined"
          type="password"
          onChange={(event) => {
            setAuth({ ...auth, password: event.target.value })
          }}
        />
        <Button variant="contained" size="large" sx={{ width: 150 }}>
          登录
        </Button>
      </Stack>
    </Container>
  )
}

export default Login
