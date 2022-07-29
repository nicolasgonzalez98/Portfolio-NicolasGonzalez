import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Nicolás González. Thanks Takuya Matsuyama for the web design.
    </Box>
  )
}

export default Footer