import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'

const Login = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <TextField
        id="username"
        label="邮箱"
        variant="outlined"
        type="email"
        sx={{ width: 300, marginTop: 4 }}
      />
      <TextField
        id="username"
        label="密码"
        variant="outlined"
        type="password"
        sx={{ width: 300, marginTop: 4 }}
      />
      <Button
        variant="contained"
        size="large"
        sx={{ width: '50%', marginTop: 6 }}
      >
        登录
      </Button>
    </Box>
  )
}

export default Login
