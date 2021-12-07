import { Box } from '@mui/system'
import BlankImg from '../assets/初始.png'
import Clothes from '../assets/衣服/衣服1（黑色.png'
import Eyes from '../assets/眼睛/眼睛（蓝绿色.png'
import Hair from '../assets/发型/发型4（红色.png'
import Eyebrow from '../assets/眉毛/眉毛3（红色.png'
import Mouth from '../assets/嘴巴/嘴巴4.png'
import { Image, Layer, Stage, Text } from 'react-konva'
import useImage from 'use-image'

const MoodDoolDiy = () => {
  const images = [BlankImg, Clothes, Eyes, Hair, Eyebrow, Mouth].map(
    (src) => useImage(src)[0]
  )
  const size = window.innerWidth - 16

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      maxWidth="sm"
    >
      <Box
        sx={{
          borderColor: 'primary.main',
          borderStyle: 'solid',
          display: 'inline-block',
          m: 'auto',
        }}
      >
        <Stage width={size} height={size}>
          <Layer>
            {images.map((i) => (
              <Image image={i} width={size} height={size} />
            ))}
          </Layer>
        </Stage>
      </Box>
    </Box>
  )
}

export default MoodDoolDiy
