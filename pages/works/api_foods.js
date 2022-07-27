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
import { Title, WorkImage, Meta } from '../../components/work'
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
                brings more recipes from the external API Sponcoolar. You can create your own recipes, and then you can
                update or delete this recipes.
                <br />
                <br />
                <span style={{color:'red',fontWeight:'500'}}>NOTE:</span> The app have a little CORS problem in the deployment page. It will be fixed in the future.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://pi-foods-five.vercel.app/" target='_blank'>
                    https://pi-foods-five.vercel.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    React.js, JavaScript, SQL Postgress, Redux, Express, SQL, Node.js, CSS, HTML 
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href='https://github.com/nicolasgonzalez98/pi-foods' target='_blank'>
                        GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <UnorderedList>
                <ListItem>You can save recipes in yours favorite list.</ListItem>
                <ListItem>You can create your own recipes.</ListItem>
                <ListItem>Your recipes can be modified and deleted</ListItem>
            </UnorderedList>
            <br />
            <WorkImage src="/images/APIFood/home.jpg" alt="foods" />
            <WorkImage src="/images/APIFood/details.jpg" alt="foods" />
            <WorkImage src="/images/APIFood/made_recipe.jpg" alt="foods" />
        </Layout>
    )
}

export default Work;

