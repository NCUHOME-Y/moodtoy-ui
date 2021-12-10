import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Fab } from '@mui/material'

const BackFab = () => (
  <Fab
    color="primary"
    sx={{ position: 'fixed', top: 10, left: 6 }}
    onClick={() => window.history.back()}
  >
    <ArrowBackIosNewIcon sx={{ transform: 'scale(1.6)', mr: '4px' }} />
  </Fab>
)

export default BackFab
