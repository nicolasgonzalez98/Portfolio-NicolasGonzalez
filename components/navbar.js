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
// import { HamburgerIcon } from '@chakra-ui/icons'
//import ThemeToggleButton from './theme-toggle-button'
// import { IoLogoGithub } from 'react-icons/io5'


const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return (
        <NextLink href={href} passHref scroll={false}>
          <Link
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            // target={target}
            // {...props}
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
            </Container>
        </Box>
    )
}

export default Navbar;