import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import anime from 'animejs'
import { useEffect, useState } from 'react'

let gid = 0

const StarSystem = () => {
  const [id] = useState(() => `sun-${gid++}`)
  useEffect(() => {
    const path = anime.path(`#${id} circle`)
    const instance = anime({
      targets: `#${id} .planet`,
      translateX: path('x'),
      translateY: path('y'),
      easing: 'linear',
      duration: 5000,
      loop: true,
    })
    return () => {
      instance.pause()
    }
  }, [])
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '300px',
      }}
    >
      <Avatar sx={{ zIndex: 10 }}>C</Avatar>
      <Box
        sx={{
          position: 'absolute',
        }}
      >
        <Avatar className="planet" sx={{ top: -20, left: -45 }}>
          H
        </Avatar>
        <svg width="150" height="150" style={{ opacity: 0 }}>
          <circle cx="100" cy="100" r="75" />
        </svg>
      </Box>
    </Box>
  )
}

export default StarSystem
