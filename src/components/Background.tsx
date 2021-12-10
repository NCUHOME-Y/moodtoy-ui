const Background = ({ src, color }: { src?: string; color?: string }) => {
  return (
    <>
      {src && (
        <div
          style={{
            backgroundImage: `url(${src})`,
            height: '100vh',
            backgroundPosition: 'center',
            // backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            zIndex: -1,
            position: 'fixed',
            overflow: 'hidden',
            top: 0,
            left: 0,
          }}
        />
      )}
      {color && (
        <div
          style={{
            backgroundColor: color,
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: -2,
            top: 0,
            left: 0,
          }}
        />
      )}
    </>
  )
}

export default Background
