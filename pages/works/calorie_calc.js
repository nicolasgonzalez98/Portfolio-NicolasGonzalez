import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    useColorModeValue,
    UnorderedList,
    //UnorderedList,
    //SimpleGrid
} from '@chakra-ui/react';
import Layout from "../../components/layouts/article"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from "../../components/work";
import P from '../../components/paragraph'

const Work = () => {
    return (
        <Layout title={'Calorie calculator'}>
            <Container>
                <Title>Calorie calculator <Badge>2023</Badge></Title>
            </Container>

            <P style={{color: useColorModeValue('black', 'cyan')}} mb={5}>
            ”Health is wealth” Obviously, you have heard it a thousand times but as we grow older we often realize it’s true and this app provides an interesting way to get started with the very boring term “dieting” as we already know “FITNESS START WITH WHAT WE EAT”.

Let’s develop an interesting project – Calorie Calculator to record and estimate number of calories we need to consume daily. This app can also provide guidelines for gaining or losing weight.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="#" 
                    //target='_blank'
                    >
                    No website<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    Python, Django, django-filter
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href='https://github.com/nicolasgonzalez98/CalorieCalc-dj-py-' target='_blank'>
                        GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                
            </List>
            <UnorderedList mb={5}>
                <ListItem>Create your own food items.</ListItem>
                <ListItem>Add food items to users!</ListItem>
                <ListItem>Record and estimate number of calories we need to consume daily</ListItem>
            </UnorderedList>
            
            <WorkImage src={'/images/CalorieCalc/home.jpg'} />
            <WorkImage src={'/images/CalorieCalc/signIn.jpg'} />
            <WorkImage src={'/images/CalorieCalc/addFoodItem.jpg'} />
            <WorkImage src={'/images/CalorieCalc/foodItems.jpg'} />
        </Layout>
    )
}

export default Work;