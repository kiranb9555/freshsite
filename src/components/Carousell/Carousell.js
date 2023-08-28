import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../CarouselItem/CarouselItem';
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import "./index.scss"
function Carousell() {
    return (
        <Carousel>
            <Carousel.Item interval={500}>
                <img width="100%" height={"80%"} src={img1} alt="Mutton" />
                
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img width="100%" height={"80%"} src={img2} alt="Mutton"/>
             
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img width="100%" height={"80%"} src={img3} alt="Mutton" />
                
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousell;