import { Badge, Container, useColorModeValue} from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import { Title } from "../../components/work"
import P from '../../components/paragraph'

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

            
        </Layout>
    )
}

export default Work