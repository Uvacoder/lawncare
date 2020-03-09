import React from "react"
import { CarouselProvider, Image, Slide, Slider, ButtonBack, ButtonNext } from "pure-react-carousel"
import { Divider } from "@material-ui/core"
import CustomDotGroup from "../CustomDotGroup"
import { graphql, Link } from 'gatsby'


const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={4}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src={require('../../static/img/before4.jpg')} />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src={require('../../static/img/after4.jpg')} />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src={require('../../static/img/before4a.jpg')} />
      </Slide>
      <Slide tag="a" index={3}>
        <Image src={require('../../static/img/after4a.jpg')} />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={4} />
  </CarouselProvider>
)

export default ImageCarousel
