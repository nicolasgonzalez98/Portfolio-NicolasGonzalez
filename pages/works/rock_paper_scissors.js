import { Badge, Container, List, ListItem, useColorModeValue, Link, UnorderedList, Heading, SimpleGrid} from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import { Meta, Title, WorkImage } from "../../components/work"
import P from '../../components/paragraph'
import { ExternalLinkIcon } from "@chakra-ui/icons"

const Work = () => {
    return (
        <Layout title='RPScissors'>
            <Container>
                <Title>Rock, Paper, Scissors<Badge>2022</Badge></Title>
            </Container>
            <P style={{color: useColorModeValue('black', 'cyan')}}>
                In this application you will be able to play Rock, Paper and Scissors.
                If you win you get a point, but if you lose you drop a point.
                Beat the machine!
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://rock-scissors-papers-react.vercel.app/" target='_blank'>
                    https://rock-scissors-papers-react.vercel.app/ <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    React.js, JavaScript, CSS, HTML, styled-components, Context-ReactJS
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href='https://github.com/nicolasgonzalez98/rockScissorsPapers-react-' target='_blank'>
                        GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <UnorderedList>
                <ListItem>Play Rock, Paper, Scissors against the computer</ListItem>
                <ListItem>Maintain the state of the score after refreshing the browser (Future option)</ListItem>
                <ListItem>View the optimal layout for the game depending on their device's screen size</ListItem>
            </UnorderedList>
            <br />
            <WorkImage src='/images/RockPaperScissors/home.jpg' />
            <WorkImage src='/images/RockPaperScissors/in-game.jpg' />
            <SimpleGrid columns={2} gap={2}>
                <WorkImage src='/images/RockPaperScissors/result.jpg' />
                <WorkImage src='/images/RockPaperScissors/rules.jpg' />
            </SimpleGrid>
            <br/>
            <Heading as='h6' variant='section-title'>Responsive</Heading>
            <SimpleGrid columns={3} gap={3}>
                <WorkImage src='/images/RockPaperScissors/home-responsive.jpg' alt='responsive-home' />
                <WorkImage src='/images/RockPaperScissors/in-game-responsive.jpg' alt='responsive-details'/>
                <WorkImage src='/images/RockPaperScissors/result-responsive.jpg' alt='responsive-home' />
            </SimpleGrid>

            
        </Layout>
    )
}

export default Work