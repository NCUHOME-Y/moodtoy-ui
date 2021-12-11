import { Box } from '@mui/system'
import { Image, Layer, Stage } from 'react-konva'
import useImage from 'use-image'
import { Doll } from '../models'

const MoodDoll = ({ doll, size }: { doll: Doll; size: number }) => {
  const images: [string, HTMLImageElement | undefined][] = [
    doll.base,
    doll.eyes,
    doll.hair,
    doll.clothes,
    doll.eyebrow,
    doll.mouth,
  ]
    .filter((s) => s)
    .map((src) => [src as string, useImage(src as string)[0]])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
      maxWidth="sm"
    >
      <Stage width={size} height={size}>
        <Layer>
          {images.map(([src, i]) => (
            <Image key={src} image={i} width={size} height={size} />
          ))}
        </Layer>
      </Stage>
    </Box>
  )
}

export default MoodDoll
