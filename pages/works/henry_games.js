import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    useColorModeValue,
    UnorderedList,
    Heading,
    SimpleGrid
} from '@chakra-ui/react';
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
    return (
        <Layout>
            <Container>
                <Title>Henry Games <Badge>2022</Badge></Title>
            </Container>

            <P style={{color:useColorModeValue('black', 'cyan')}}>
            This application is an e-commerce and community.
            You can buy PC games and join your friends. You can chat with your friends and meet new people!
                <br />
                <br />
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://henry-games-pg.vercel.app" target='_blank'>
                    https://henry-games-pg.vercel.app <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    React.js, JavaScript, SQL Postgress, Redux, Express, SQL, Node.js, CSS, HTML, Bootstrap.
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href='https://github.com/nicolasgonzalez98/HenryGames-PG/tree/dev' target='_blank'>
                        GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta color='red'>Note</Meta>
                    The app have a little CORS problem when you try to aunthenticate with Google. It will be fixed.
                </ListItem>
            </List>
            <UnorderedList>
                <Heading as='h5' variant='section-title' size='m'>Features</Heading>
                <ListItem>You can create a user or authenticate with Google</ListItem>
                <ListItem>There is an email account that allows you to activate and recover accounts</ListItem>
                <ListItem>A list of games you can buy. Filtered by category, prices and offers.</ListItem>
                <ListItem>You can see your own profile and edit it.</ListItem>
                <ListItem>You can make friends and chat with them</ListItem>
                <ListItem>The application has its own blog where you can find the latest news from the gaming world.</ListItem>
                <ListItem>If you&apos;re an admin, you can ban users, upload and edit games, view sales statistics,
                    publish articles and rate reported comments.
                </ListItem>
            </UnorderedList>
            <br />
            <WorkImage src='/images/HenryGames/home.jpg' alt='home' />
            <WorkImage src='/images/HenryGames/shop.jpg' alt='shop'/>
            <WorkImage src='/images/HenryGames/profile.jpg' alt='profile' />
            <br />
            <Heading as='h6' variant='section-title'>Detail&apos;s game</Heading>
            <SimpleGrid columns={2} gap={2}>
                <WorkImage src='/images/HenryGames/detail.jpg' alt='detail' />
                <WorkImage src='/images/HenryGames/comments.jpg' alt='comments'/>  
            </SimpleGrid>
            <br />
            <Heading as='h6' variant='section-title'>User&apos;s friends</Heading>
            <SimpleGrid columns={2} gap={2}>
                <WorkImage src='/images/HenryGames/friends-list.jpg' alt='friends-list' />
                <WorkImage src='/images/HenryGames/chat.jpg' alt='chat'/>  
            </SimpleGrid>
            <Heading as='h6' variant='section-title'>Library</Heading>
            <WorkImage src='/images/HenryGames/library.jpg' alt='library' />
            <Heading as='h6' variant='section-title'>Blog</Heading>
            <WorkImage src='/images/HenryGames/blog.jpg' alt='blog' />
            <Heading as='h6' variant='section-title'>Admin Tools</Heading>
            <WorkImage src='/images/HenryGames/admin-tools.jpg' alt='admin' />
        </Layout>
    )
}

export default Work;