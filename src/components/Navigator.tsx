import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import FlareIcon from '@mui/icons-material/Flare'
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
        label="System"
        icon={<FlareIcon />}
        component={RouterLink}
        to="/"
      />
      <BottomNavigationAction
        label="Account"
        icon={<AccountCircleIcon />}
        component={RouterLink}
        to="/account"
      />
    </BottomNavigation>
  )
}

export default Navigator
