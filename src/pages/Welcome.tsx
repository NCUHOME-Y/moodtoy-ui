import { Avatar, Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import FaceIcon from '@mui/icons-material/Face'

const Welcome = () => {
  return (
    <Container maxWidth="sm">
      <Stack
        sx={{
          textAlign: 'center',
          alignItems: 'center',
        }}
        spacing={2}
      >
        <Avatar
          sx={{
            bgcolor: 'secondary.main',
            transform: 'scale(1.5)',
            mt: 16,
            mb: 4,
          }}
        >
          <FaceIcon />
        </Avatar>
        <Typography variant="h4" sx={{ mt: 16 }}>
          创建你的
        </Typography>
        <Typography variant="h3">
          <Box component="span" sx={{ color: 'secondary.main' }}>
            MOOD{' '}
          </Box>
          娃娃
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ width: 150, position: 'absolute', bottom: 96 }}
          component={Link}
          to="/diy"
        >
          开始
        </Button>
      </Stack>
    </Container>
  )
}

export default Welcome
