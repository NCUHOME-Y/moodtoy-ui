// import Clothes from '../assets/衣服/衣服1（黑色.png'
// import Eyes from '../assets/眼睛/眼睛（蓝绿色.png'
// import Hair from '../assets/发型/发型4（红色.png'
// import Eyebrow from '../assets/眉毛/眉毛3（红色.png'
// import Mouth from '../assets/嘴巴/嘴巴4.png'
import Base from '../assets/初始.png'
import { Button, IconButton, ImageList, ImageListItem } from '@mui/material'
import { useEffect, useState } from 'react'
import MoodDoll from '../components/MoodDoll'
import { Box } from '@mui/system'
import BackBar from '../components/BackBar'
import CheckIcon from '@mui/icons-material/Check'
import axios from 'axios'
import { Doll } from '../models'

const MoodDollDiy = ({
  doll,
  setDoll,
}: {
  doll: Doll
  setDoll: (doll: Doll) => void
}) => {
  const [selectedIndex, setSelectedIndex] = useState('hair')
  const [dollImg, setDollImg] = useState<Record<string, string[]>>({})
  const [localDoll, setLocalDoll] = useState(() => doll)
  const dollSize = 8 * 35

  useEffect(() => {
    ;(async () => {
      const r = await axios.get('/api/moodtoy/all')
      setDollImg(r.data)
    })()
  }, [])
  return (
    <>
      <BackBar>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          sx={{ color: '#fff' }}
          onClick={() => {
            setDoll(localDoll)
          }}
        >
          <CheckIcon />
        </IconButton>
      </BackBar>
      <Box sx={{ pt: 6, width: '100vw', overflowX: 'hidden' }}>
        <MoodDoll doll={localDoll} size={dollSize} />
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
              key={s[1]}
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
          sx={{ height: `calc(96vh - ${dollSize + 8 * 17}px)` }}
        >
          {(
            dollImg[selectedIndex]?.map(
              (src) => `/api/moodtoy/static${src}`
            ) || [Base]
          ).map((src) => (
            <ImageListItem key={src}>
              <img
                key={src}
                src={src}
                onClick={() => {
                  setLocalDoll({ ...localDoll, [selectedIndex]: src })
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  )
}

export default MoodDollDiy
