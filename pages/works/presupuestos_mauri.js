import { Badge, Container, useColorModeValue } from "@chakra-ui/react";
import Layout from "../../components/layouts/article"
import { Title } from "../../components/work";
import P from '../../components/paragraph'

const Work = () => {
    return (
        <Layout title={'Presupuestos DecorGlass'}>
            <Container>
                <Title>Presupuestos DecorGlass <Badge>2023</Badge></Title>
            </Container>
            <P style={{color: useColorModeValue('black','cyan')}}>
                
            </P>
        </Layout>
    )
}

export default Work;