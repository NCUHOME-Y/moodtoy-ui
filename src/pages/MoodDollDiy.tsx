import BlankImg from '../assets/初始.png'
import Clothes from '../assets/衣服/衣服1（黑色.png'
import Eyes from '../assets/眼睛/眼睛（蓝绿色.png'
import Hair from '../assets/发型/发型4（红色.png'
import Eyebrow from '../assets/眉毛/眉毛3（红色.png'
import Mouth from '../assets/嘴巴/嘴巴4.png'
import {
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItemButton,
  ListItemIcon,
} from '@mui/material'
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MoodDoll from '../components/MoodDoll'
const MoodDollDiy = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dollSize = 8 * 35

  return (
    <>
      <MoodDoll
        doll={{
          base: BlankImg,
          clothes: Clothes,
          eyebrow: Eyebrow,
          eyes: Eyes,
          hair: Hair,
          mouth: Mouth,
        }}
        size={dollSize}
      />
      <Grid container>
        <Grid item xs={2}>
          <List sx={{ mt: 1 }}>
            <ListItemButton selected={selectedIndex === 0}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faInfo} style={{ marginLeft: 12 }} />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={10}>
          <ImageList
            cols={2}
            gap={0}
            rowHeight={164}
            sx={{ height: `calc(96vh - ${dollSize}px)` }}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </>
  )
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
]
export default MoodDollDiy
