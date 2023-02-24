import { Badge, Container, Link, List, ListItem, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import Layout from "../../components/layouts/article"
import { Meta, Title, WorkImage } from "../../components/work";
import P from '../../components/paragraph'
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Work = () => {
    return (
        <Layout title={'Presupuestos DecorGlass'}>
            <Container>
                <Title>Presupuestos DecorGlass <Badge>2023</Badge></Title>
            </Container>
            <P style={{color: useColorModeValue('black','cyan')}}>
            In this application you will be able to create your own budgets, 
            organize your clients and your inventory. All this with the advantage 
            of being able to use it wherever you are.
            </P>

            <List ml={4} my={4}>
            <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://front-presupuestos.vercel.app/" target='_blank'>
                    https://front-presupuestos.vercel.app/ <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    React.js, JavaScript, Redux, CSS, HTML, Passport.js, React Bootstrap
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href='https://github.com/nicolasgonzalez98/back-presupuestos-MPGlass' target='_blank'>
                        GitHub (BackEnd) <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href='https://github.com/nicolasgonzalez98/Front-Presupuestos-Glass' target='_blank'>
                        GitHub (FrontEnd) <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <UnorderedList mb={4}>
                <ListItem>Create your user, save your owns budgets, clients and manage your inventory.</ListItem>
            </UnorderedList>
            <WorkImage src='/images/presupuestosMauri/create_budget.jpg'/>
            <WorkImage src='/images/presupuestosMauri/login.jpg'/>
            <WorkImage src='/images/presupuestosMauri/clients.jpg'/>
            <WorkImage src='/images/presupuestosMauri/articles.jpg'/>
            <WorkImage src='/images/presupuestosMauri/add_client.jpg'/>
            <WorkImage src='/images/presupuestosMauri/create_article.jpg'/>
        </Layout>
    )
}

export default Work;