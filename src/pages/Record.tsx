import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import UserInfo from '../components/UserInfo'
import { Mood } from '../models'

const Record = ({ moods }: { moods: Mood[] }) => {
  return (
    <List>
      <UserInfo user={{ sid: 'xx', name: 'yy', id: 0 }} showAccountSettings />
      {moods.map((m) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar src={m.graffiti_url} />
          </ListItemAvatar>
          <ListItemText primary={m.text} secondary={m.date.toLocaleString()} />
        </ListItem>
      ))}
    </List>
  )
}
export default Record
