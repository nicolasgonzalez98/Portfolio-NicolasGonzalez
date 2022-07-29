import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Button, List, ListItem, Link } from '@chakra-ui/react'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
//import { GridItem } from '../components/grid-item';
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail
} from 'react-icons/io5'



const Home = () => {
    return (
        <Layout>
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
                        
                    </Paragraph>
                    <Box align='center' my={4}>
                        <NextLink href='/works'>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme='teal'
                            >
                            Projects
                            </Button>
                        </NextLink>
                    </Box>
                    <Box align='center' my={4}>
                        <a href='/NicolasGonzalezCV.pdf' target='_blank'>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme='teal'
                            >
                                Download CV
                            </Button>
                        </a>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        I start my studies in engineering at the FIUBA (Facultad de Ingenieria de la Universidad de Buenos Aires).
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        The pandemic starts and I continue the university. I started to learn Python and love programming.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        I started my studies as Python Developer at 
                        <a target='_blank' href='https://www.educacionit.com/carrera-python' rel="noreferrer"> Educacion IT</a>.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        I did my first job as developer for a glass startup. 
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        I start my studies at SoyHenry Bootcamp for Full-Stack Developer. 
                        In July I was certified as Full-stack Developer by soyHenry.
                    </BioSection>
                    
                </Section>

                <Section delay={0.3}>
                    <Heading as='h3' variant="section-title">
                        On the web &amp; certificates
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href='mailto:nicolasgonzalez470@gmail.com' target='_blank'>
                                <Button variant='ghost' colorScheme='teal' leftIcon={<IoMail />}>
                                    nicolasgonzalez470@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://github.com/nicolasgonzalez98' target='_blank'>
                                <Button variant='ghost' colorScheme='teal' leftIcon={<IoLogoGithub />}>
                                    @nicolasgonzalez98
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href='https://www.linkedin.com/in/nicolasgonzalez98' target='_blank'>
                                <Button variant='ghost' colorScheme='teal' leftIcon={<IoLogoLinkedin />}>
                                    @nicolasgonzalez98
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href='https://www.instagram.com/nico.ngonzalez' target='_blank'>
                                <Button variant='ghost' colorScheme='teal' leftIcon={<IoLogoInstagram />}>
                                    @nico.ngonzalez
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                    <Box align='center' my={4}>
                        <NextLink href='/certificates'>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme='teal'
                            >
                            Certificates
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home;