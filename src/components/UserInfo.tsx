import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import { User } from '../models'
import SettingsIcon from '@mui/icons-material/Settings'
const UserInfo = ({
  user,
  showAccountSettings,
}: {
  user: User
  showAccountSettings?: boolean
}) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>{user.sid[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.sid} secondary={user.name}></ListItemText>
        {showAccountSettings ? (
          <IconButton>
            <SettingsIcon />
          </IconButton>
        ) : null}
      </ListItem>
      <Divider />
    </>
  )
}

export default UserInfo
