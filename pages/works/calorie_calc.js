import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title={'Calorie calculator'}>
            <Container>
                <Title>Calorie calculator <Badge>2023</Badge></Title>
            </Container>

            <P style={{color: useColorModeValue('black', 'cyan')}}>
                In this application you will be able to see the information about all the 
                food items in the app. You can filter them by region and name.
                You can toggle the color scheme between light and dark mode 
            </P>
        </Layout>
    )
}

export default Work;