import { AppBar, IconButton, Toolbar } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { ReactNode } from 'react'
const BackBar = ({ children }: { children?: ReactNode }) => {
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
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default BackBar
