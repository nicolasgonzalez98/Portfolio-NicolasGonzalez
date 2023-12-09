import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Nicolás González. Gracias Takuya Matsuyama por el diseño web.
    </Box>
  )
}

export default Footer