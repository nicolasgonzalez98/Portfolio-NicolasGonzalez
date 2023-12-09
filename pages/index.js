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
                    Soy un desarrollador full stack que vive en Buenos Aires, Argentina! 
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
                        Sobre mi
                    </Heading>
                    <Paragraph>
                        Soy un estudiante de ingenieria en sistemas y desarrollo de Software. 
                        Actualmente trabajo en AA2000 como Soporte de campo y desarrollo.
                        Actualmente estoy buscando oportunidades para aplicar mis habilidades técnicas y de resolución de problemas en un entorno de desarrollo dinámico.
                        
                    </Paragraph>
                    <Box align='center' my={4}>
                        <NextLink href='/works'>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme='teal'
                            >
                            Proyectos
                            </Button>
                        </NextLink>
                    </Box>
                    
                </Section>

                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
                        Biografia
                    </Heading>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Empiezo mis estudios de ingeniera en sistemas en la FIUBA.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Empieza la pandemia y sigo mis estudios en programación. Arranco mis estudios en Python.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Empiezo a estudiar para Desarrollador Python en
                        <a target='_blank' href='https://www.educacionit.com/carrera-python' rel="noreferrer"> Educacion IT</a>.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Realizo mi primer trabajo como desarrollador para un micro-emprendimiento de vidrios. 
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Empiezo mis estudios en SoyHenry BootCamp para Full-Stack Developer. 
                        Termino en Julio.<br/>
                        Empiezo a trabajar como Soporte de campo en AA2000.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Empiezo mis estudios como Desarrollador de Softwareen IFTS N°11. Apruebo 8 materias en el año.
                        <br/>
                        Realizo mi primer desarrollo por iniciativa propia en AA2000. Desarrollo una aplicacion para controlar el stock de mi equipo de trabajo.
                        Empiezo a trabajar como Soporte de Desarrollo para AA2000.

                    </BioSection>
                    <Box align='center' my={4}>
                        <a href='/NicolasGonzalezCV.pdf' target='_blank'>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme='teal'
                            >
                                Descargar CV
                            </Button>
                        </a>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Heading as='h3' variant="section-title">
                        Contacto & certificados
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

                        
                    </List>
                    <Box align='center' my={4}>
                        <NextLink href='/certificates'>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme='teal'
                            >
                            Certificados
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home;