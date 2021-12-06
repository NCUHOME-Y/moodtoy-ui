import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HistoryIcon from '@mui/icons-material/History'
import FaceIcon from '@mui/icons-material/Face'
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'
const Navigator = () => {
  const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      showLabels
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue)
      }}
    >
      <BottomNavigationAction
        label="娃娃"
        icon={<FaceIcon />}
        component={RouterLink}
        to="/"
      />
      <BottomNavigationAction
        label="记录"
        icon={<HistoryIcon />}
        component={RouterLink}
        to="/record"
      />
    </BottomNavigation>
  )
}

export default Navigator
