import {
    Container,
    Badge,
    // Link,
    List,
    ListItem,
    useColorModeValue,
    LinkOverlay
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, /*WorkImage*/ Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
    return (
        <Layout title='api_foods'>
            <Container>
                <Title>Api-Foods <Badge>2022</Badge></Title>
            </Container>
            <P style={{color:useColorModeValue('black', 'cyan')}}>
                In this application you will be able to see different food recipes, with their information, 
                it has functionalities such as filtering by type of dates, it also has a search engine that 
                brings more recipes from the external API Sponcoolar. Even without deployment
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <LinkOverlay href="https://pi-foods-five.vercel.app/" target='_blank'>
                    https://pi-foods-five.vercel.app/ <ExternalLinkIcon mx="2px" />
                    </LinkOverlay>
                </ListItem>
            </List>
        </Layout>
    )
}

export default Work;

