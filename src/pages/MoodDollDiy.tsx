import BlankImg from '../assets/初始.png'
import Clothes from '../assets/衣服/衣服1（黑色.png'
import Eyes from '../assets/眼睛/眼睛（蓝绿色.png'
import Hair from '../assets/发型/发型4（红色.png'
import Eyebrow from '../assets/眉毛/眉毛3（红色.png'
import Mouth from '../assets/嘴巴/嘴巴4.png'
import {
  Button,
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
import { Box } from '@mui/system'
import BackBar from '../components/BackBar'

const MoodDollDiy = () => {
  const [selectedIndex, setSelectedIndex] = useState('hair')
  const dollSize = 8 * 35

  return (
    <>
      <BackBar />
      <Box sx={{ pt: 6 }}>
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            '& .MuiButton-root': {
              flex: '0 0 auto',
              width: '30%',
              ml: 1,
              mr: 1,
            },
          }}
        >
          {[
            ['发型', 'hair'],
            ['眼睛', 'eyes'],
            ['衣服', 'clothes'],
          ].map((s) => (
            <Button
              variant={s[1] === selectedIndex ? 'contained' : 'outlined'}
              onClick={() => {
                setSelectedIndex(s[1])
              }}
            >
              {s[0]}
            </Button>
          ))}
        </Box>
        <ImageList
          cols={3}
          gap={0}
          rowHeight={8 * 17}
          sx={{ height: `calc(96vh - ${dollSize + 8 * 10}px)` }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                onClick={() => {}}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
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
