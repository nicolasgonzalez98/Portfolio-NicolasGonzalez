import Logo from "./logo";
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <NextLink href={href} passHref scroll={false}>
        <Link
          p={2}
          bg={active ? 'grassTeal' : undefined}
          color={active ? inactiveColor : inactiveColor}
          target={target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
  }


const Navbar = props => {
    const { path } = props

    return (
        <Box
            position='fixed'
            as='nav'
            w='100%'
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter:'blur(10px'}}
            zIndex={1}
            {...props}
        >
            <Container 
                display='flex'
                p={2}
                wrap='wrap'
                align='center'
                maxW='container.md'
                justify='space-between'
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base:'none', md: 'flex'}}
                    width={{base:'full', md:'auto'}}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0}}
                >
                    <LinkItem 
                        href='/works'
                        path={path}
                    >
                        Proyectos
                    </LinkItem>
                    <LinkItem 
                        href='/certificates'
                        path={path}
                    >
                        Certificados
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/nicolasgonzalez98"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub />
                        GitHub
                    </LinkItem>
                </Stack>

                <Box flex={1} align='right'>
                    <ThemeToggleButton />
                    <Box 
                        ml={2}
                        display={{base:'inline-block',md:'none'}}
                    >
                        <Menu>
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon />} 
                                variant='outline' 
                                aria-label="Options" 
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Home Page</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Trabajos</MenuItem>
                                </NextLink>
                                <NextLink href="/certificates" passHref>
                                    <MenuItem as={Link}>Certificados</MenuItem>
                                </NextLink>
                                <MenuItem
                                target='_blank'
                                as={Link}
                                href="https://github.com/nicolasgonzalez98"
                                >
                                    Ver GitHub
                                </MenuItem>
                            </MenuList>

                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar;