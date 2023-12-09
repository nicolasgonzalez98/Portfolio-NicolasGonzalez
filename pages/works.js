import { Container, /*Box,*/ Heading, SimpleGrid/*, Divider*/ } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import Layout from '../components/layouts/article';
//Aca vamos a importar las fotos
import foods_work from '../public/images/APIFood/landing.jpg'
import henry_games from '../public/images/HenryGames/landing.jpg'
import rest_countries from '../public/images/Rest-countries/landing.jpg'
import rock_p_s from '../public/images/RockPaperScissors/portada.jpg'
import forum_p from '../public/images/forumNicolas/portada.png'
import portada_calc from '../public/images/CalorieCalc/portada.jpg'
import decor_p from '../public/images/presupuestosMauri/portada.jpg'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    JavaScript y React
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem 
                            id='presupuestos_mauri' 
                            title='DecorGlass Presupuestos'
                            thumbnail={decor_p}
                        >
                        Este es mi primer trabajo profesional.
                        </WorkGridItem> 
                    </Section>
                    <Section>
                        <WorkGridItem 
                            id='api_foods' 
                            title='API-Food'
                            thumbnail={foods_work}
                        >
                        En esta aplicación se pueden observar distintas recetas con su respectiva información. 
                        </WorkGridItem> 
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='henry_games'
                            title='Henry Games'
                            thumbnail={henry_games}
                        >
                            Esta app es un E-Commerce y Comunidad. Se pueden comprar juegos de PC y hacer amigos.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem

                            id='rest_api_countries'
                            title='Rest API Countries'
                            thumbnail={rest_countries}
                        >
                            En esta aplicación vas a poder ver la información de cada país, dependencia, territorio autonomo de alrededor del mundo.

                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem

                            id='rock_paper_scissors'
                            title='Rock, Paper, Scissors'
                            thumbnail={rock_p_s}
                        >
                            Desarrollé mi propio Piedra, Papel o Tijera con animaciones y estilos complejos.

                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
            <Container mb={10}>
                <Heading as='h3' fontSize={20} mb={4}>
                    Python
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id='forumNicolas'
                            title="Nicola's forum"
                            thumbnail={forum_p}
                        >
                            Foro desarrollado con Django. Mi primer proyecto con este framework.

                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='calorie_calc'
                            title="Calorie Calculator"
                            thumbnail={portada_calc}
                        >
                            Calculadora de calorias desarrollada con Django. 

                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works