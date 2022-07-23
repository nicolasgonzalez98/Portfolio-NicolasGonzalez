import { Container, Box, Heading } from '@chakra-ui/react'

const Home = () => {
    return (
        <Container >
            <Box 
            borderRadius="lg"
            bg='red' 
            p={3} 
            mb={6} 
            align='center'
            >
                Hello I&apos;m a full-stack developer based in Buenos Aires, Argentina! 
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Nicolas Gonzalez
                    </Heading>
                    <p>Full Stack Developer</p>
                </Box>
            </Box>

            
        </Container>
    )
}

export default Home;