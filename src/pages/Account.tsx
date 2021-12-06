import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import BackBar from '../components/BackBar'
import UserInfo from '../components/UserInfo'
import { User } from '../models'

const Account = () => {
  const [user, setUser] = useState<User>({
    sid: 'name',
    name: 'username',
    id: 0,
  })
  return (
    <Box sx={{ mt: 6 }}>
      <BackBar />
      <List sx={{ width: '100%' }}>
        <UserInfo user={user} />
        <ListItem disablePadding>
          <ListItemButton onClick={() => {}}>
            <ListItemText primary="更改用户名" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {}}>
            <ListItemText primary="更改密码" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {}}>
            <ListItemText primary="注销" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {}}>
            <ListItemText primary="删除账户" sx={{ color: 'error.main' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Account
