import { Badge, Container, Link, List, ListItem, UnorderedList, useColorModeValue, Heading, SimpleGrid } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import { Meta, Title, WorkImage } from "../../components/work"
import P from '../../components/paragraph'
import { ExternalLinkIcon } from "@chakra-ui/icons"

const Work = () => {
    return (
        <Layout>
            <Container>
                <Title>Rest-API Countries <Badge>2022</Badge></Title>
            </Container>
            <P style={{color: useColorModeValue('black', 'cyan')}}>
                In this application you will be able to see the information about all the 
                countries around the world. You can filter them by region and name.
                You can toggle the color scheme between light and dark mode 
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://rest-countries-api-rose-gamma.vercel.app/" target='_blank'>
                    https://rest-countries-api-rose-gamma.vercel.app/ <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    React.js, JavaScript, Redux, CSS, HTML 
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href='https://github.com/nicolasgonzalez98/rest-countries-api' target='_blank'>
                        GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <UnorderedList>
                <ListItem>See all countries from the API on the homepage</ListItem>
                <ListItem>Search for a country using an input field</ListItem>
                <ListItem>Filter countries by region</ListItem>
                <ListItem>Click on a country to see more detailed information on a separate page</ListItem>
                <ListItem>Click through to the border countries on the detail page</ListItem>
                <ListItem>Toggle the color scheme between light and dark mode </ListItem>
            </UnorderedList>
            <br />
            <WorkImage src='/images/Rest-countries/home.jpg' />
            <WorkImage src='/images/Rest-countries/details.jpg' />
            <br />
            <Heading as='h6' variant='section-title'>Responsive</Heading>
            <SimpleGrid columns={2} gap={2}>
                <WorkImage src='/images/Rest-countries/responsive-home.jpg' alt='responsive-home' />
                <WorkImage src='/images/Rest-countries/responsive-details.jpg' alt='responsive-details'/>  
            </SimpleGrid>
        </Layout>
    )
}

export default Work