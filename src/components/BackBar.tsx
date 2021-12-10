import { AppBar, IconButton, Toolbar } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
const BackBar = () => {
  return (
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
      </Toolbar>
    </AppBar>
  )
}

export default BackBar
