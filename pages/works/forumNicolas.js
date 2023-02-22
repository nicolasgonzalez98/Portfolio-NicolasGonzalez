import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    useColorModeValue,
    UnorderedList,
    //SimpleGrid
} from '@chakra-ui/react';
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, 
    WorkImage, 
    Meta 
} from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
    return (
        <Layout>
            <Container>
                <Title>Nicola&rsquo;s Forum <Badge>2023</Badge></Title>
            </Container>

            <P style={{color:useColorModeValue('black', 'cyan')}}>
                In this application you can create forums and made comments in this.
                Is a simple Django&rsquo;s application and it&rsquo;s my first job with this framework.
                <br />
                <br />
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="http://forumnicolas.pythonanywhere.com" target='_blank'>
                    http://forumnicolas.pythonanywhere.com <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    Python, Django
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href='https://github.com/nicolasgonzalez98/forum-django' target='_blank'>
                        GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <UnorderedList mb={5}>
                <ListItem>You can create and save forums.</ListItem>
                <ListItem>You can create discussions in the different forums.</ListItem>
            </UnorderedList>

            <WorkImage src="/images/forumNicolas/home.jpg" alt="home" />
            <WorkImage src="/images/forumNicolas/agregarForo.jpg" alt="addForum" />
            <WorkImage src="/images/forumNicolas/addDiscuss.jpg" alt="addDiscuss" />
        </Layout>
    )
}

export default Work;