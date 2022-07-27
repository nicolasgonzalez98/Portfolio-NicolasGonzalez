import { Container, /*Box,*/ Heading, SimpleGrid/*, Divider*/ } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import Layout from '../components/layouts/article';
//Aca vamos a importar las fotos
import foods_work from '../public/images/APIFood/landing.jpg'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem 
                            id='api_foods' 
                            title='API-Food'
                            thumbnail={foods_work}
                        >
                        In this application you will be able to see different food recipes, with their information. 
                        </WorkGridItem> 
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works