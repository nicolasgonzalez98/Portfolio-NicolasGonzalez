import { 
    Container, 
    Heading,
    //Image
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
//import img from '../public/images/certificados/desarrollo-web_page-0001.jpg'
import ImageSlider from "../components/ImageSlider"
import { SlideData } from "../components/resources/SlideData";
import Section from "../components/section";


const Certificate = () => {

    return (
        <Layout>
            <Container>
                <Section delay={0.3}>
                    <Heading as='h3' fontSize={20} mb={4}>
                        Certificates
                    </Heading>
                    <ImageSlider slides={SlideData} />
                </Section>
                
            </Container>
        </Layout>
    )
}

export default Certificate