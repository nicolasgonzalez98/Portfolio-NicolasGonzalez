import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';


const Home = () => {
    return (
        <Container >
            <Box 
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
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
                <Box 
                    flexShrink={0}
                    mt={{base:4,md:0}}
                    ml={{md:6}}
                    align='center'

                >
                    <Image 
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle='solid'
                        maxWidth='100px'
                        display='inline-block'
                        borderRadius="full"
                        src='/images/nico_edit.jpg'
                        alt='Profile Image'
                    />
                </Box>
            </Box>


            <Section delay={0.1}>
                <Heading as='h3' variant='section-title'>
                    About me
                </Heading>
                <Paragraph>
                    I love the world of technology, 
                    I am passionate about solving programming problems and innovating code.

                    I like other fields like cinema, exercising and sports. 
                    I am currently looking for a job where I can put my skills and knowledge into practice to achieve great goals.
                    I consider myself a lively, positive, cheerful and respectful person. These qualities have always helped me to work in a team in an excellent way.
                    {/* <NextLink href='/works/inkdrop'>
                        <Link>Inkdrop</Link>
                    </NextLink> */}
                </Paragraph>
                <Box align='center' my={4}>
                    <NextLink href='/works'>
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme='teal'
                        >Projects</Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    )
}

export default Home;