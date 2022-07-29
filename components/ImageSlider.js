import { Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImageSlider = ({ slides }) => {
  let color = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Carousel useKeyboardArrows infiniteLoop>
      {slides.map((slide) => {
        return (
          <>
            <Heading color={color} as="h5" fontSize={15} mb={4}>
              {slide.title ? slide.title : 'Titulo'}
            </Heading>
            <Image src={slide.image} height="auto" width="800px" />
          </>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;