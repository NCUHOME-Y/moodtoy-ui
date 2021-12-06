import { AppBar, IconButton, Toolbar } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
const BackBar = () => {
  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar variant="dense">
        <IconButton
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
