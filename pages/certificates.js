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
import { useEffect } from "react";


const Certificate = () => {

    useEffect(() => {
        return 
    })

    return (
        <Layout delay={0.3}>
            <Container>
                <Section >
                    <Heading as='h3' fontSize={20} mb={4}>
                        Certificados
                    </Heading>
                    <ImageSlider slides={SlideData} />
                </Section>
                
            </Container>
        </Layout>
    )
}

export default Certificate