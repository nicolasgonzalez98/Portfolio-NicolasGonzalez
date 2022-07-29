import { 
    Container, 
    Heading,
    //Image
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
//import img from '../public/images/certificados/desarrollo-web_page-0001.jpg'
import ImageSlider from "../components/ImageSlider"
import { SlideData } from "../components/resources/SlideData";


const Certificate = () => {

    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Certificates
                </Heading>
                <ImageSlider slides={SlideData} />
            </Container>
        </Layout>
    )
}

export default Certificate