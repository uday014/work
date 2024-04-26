import React, {useState, useEffect, useRef} from 'react'
import './css/Banner.css'
import banner3 from './assets/banner_3.avif'
import banner4 from './assets/banner_4.jpg'
import banner5 from './assets/banner_5.jpg'
import banner6 from './assets/banner_6.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



const ExampleCarouselImage = ({ src , text , caption, caption2,carouselRef, activeIndex}) => {


    const handleLinkClick = (slideIndex) => {
      carouselRef.current.to(slideIndex);
      // if (carouselRef.current && carouselRef.current.select) {
      //   carouselRef.current.select(slideIndex);
      // }
    };



    return (
      <div className="example-carousel-image">
        <img src={src} className='banner-image' alt={text} />
        <div className="banner-content d-flex">
          <div>
          <h1>{caption}</h1>
          <h1>{caption2}</h1>
          <div className='hori-line'></div>
          <p style={{maxWidth:"400px",fontSize:"20px",lineHeight:"22px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta amet labore nobis hic possimus earum, nisi velit, aperiam voluptatem mollitia animi inventore magni aliquam nihil laborum. Eius quam dolores ex.</p>
          <div className='d-flex justify-content-start gap-3'>
                <button className='view-button rounded'>View details</button>
                <button className='get-button rounded'>Get a quote</button>
            </div>
            </div>

            <div className='banner-right-content'>
                <a className={activeIndex === 0 ? 'active-glow' : ''} onClick={()=>handleLinkClick(0)}>Temporary Staffing Payroll Support</a>
                <a className={activeIndex === 1 ? 'active-glow' : ''} onClick={()=>handleLinkClick(1)}>Permanent Staffing</a>
                <a className={activeIndex === 2 ? 'active-glow' : ''} onClick={()=>handleLinkClick(2)}>Payroll Support</a>
                <a className={activeIndex === 3 ? 'active-glow' : ''} onClick={()=>handleLinkClick(3)}>Background Verification</a>
                <a className={activeIndex === 4 ? 'active-glow' : ''} onClick={()=>handleLinkClick(4)}>Legal Compliance Outsourcing</a>
                <a className={activeIndex === 5 ? 'active-glow' : ''} onClick={()=>handleLinkClick(5)}>HR and Compliance Audit</a>
                <a className={activeIndex === 6 ? 'active-glow' : ''} onClick={()=>handleLinkClick(6)}>HR and Compliance Training</a>
                <a className={activeIndex === 7 ? 'active-glow' : ''} onClick={()=>handleLinkClick(7)}>Business Processes</a>
                <a className={activeIndex === 8 ? 'active-glow' : ''} onClick={()=>handleLinkClick(8)}>Contractual Hiring</a>
            </div>
        </div>
      </div>
    );
  };



function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleSelect = (selectedIndex, e) => {
      setActiveIndex(selectedIndex);
    };

  return (
    <>

<div className='banner-pos container-fluid p-0'>
    
<Carousel fade interval={7000}  ref={carouselRef} pause={false} prevIcon={<span className="carousel-control-prev-icon" />} nextIcon={<span className="carousel-control-next-icon" />} activeIndex={activeIndex} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage id="first" src={banner5} text="First slide" caption="Temporary Staffing" caption2="Payroll Support" carouselRef={carouselRef}  activeIndex={activeIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage id="second" src={banner3} text="Second slide" caption="Permanent Staffing" carouselRef={carouselRef}  activeIndex={activeIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage id="third" src={banner4} text="Third slide" caption="Payroll Support" carouselRef={carouselRef}  activeIndex={activeIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage id="fourth" src={banner6} text="Third slide" caption="Background Verification" carouselRef={carouselRef}  activeIndex={activeIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage id="fifth" src={banner5} text="Third slide" caption="Legal Compliance Outsourcing" carouselRef={carouselRef}  activeIndex={activeIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage id="six" src={banner3} text="Third slide" caption="HR and Compliance Audit" carouselRef={carouselRef}  activeIndex={activeIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage id="seven" src={banner4} text="Third slide" caption="HR and Compliance Training" carouselRef={carouselRef}  activeIndex={activeIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage id="eight" src={banner6} text="Third slide" caption="Business Processes" carouselRef={carouselRef}  activeIndex={activeIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage id="ninth" src={banner3} text="Third slide" caption="Contractual Hiring" carouselRef={carouselRef}  activeIndex={activeIndex} />
      </Carousel.Item>
    </Carousel>

</div>
    </>
  )
}

export default Banner