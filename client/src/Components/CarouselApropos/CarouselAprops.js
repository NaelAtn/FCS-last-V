import React from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import Carousel from "better-react-carousel";
import img6 from './img6.jpg'

const CarouselAprops = () => {
  return (
    <div>
      <Carousel cols={2} rows={1} gap={10} loop={true} autoplay={2000} hideArrow={true} showDots={true} dotColorActive="#056CF2" >
        <Carousel.Item>
          <img width="100%" src={img1} alt="FCS-Lavage" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img2} alt="FCS-Lavage" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img3} alt="FCS-Lavage" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img4} alt="FCS-Lavage" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img5} alt="FCS-Lavage" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img6} alt="FCS-Lavage" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselAprops;
