import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box 
            as='main' 
            pb={8}
            
        >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* 
                <meta name="description" content="Nicolas's portfolio" />
                <meta name="author" content="Takuya Matsuyama" />
                <meta name="author" content="craftzdog" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@craftzdog" />
                <meta name="twitter:creator" content="@craftzdog" />
                <meta name="twitter:image" content="/card.png" />
                <meta property="og:site_name" content="Takuya Matsuyama's Homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />  */}
                <title>Nicolas Gonzalez Portfolio</title>
            </Head>

            <Navbar
                path={router.asPath}
            />

            <Container 
                maxW="container.md"
                pt={14}
            >
                {children}
            </Container>
        </Box>
    )
}

export default Main;
