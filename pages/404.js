import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button} from '@chakra-ui/react'

const NotFound = () => {
    return (
      <Container>
        <Heading as="h1">No encontrada</Heading>
        <Text>La pagina que buscaste no fue encontrada.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button colorScheme="teal">Volver a pagina principal</Button>
          </NextLink>
        </Box>
      </Container>
    )
  }
  
  export default NotFound