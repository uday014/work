import React from 'react'
import './css/Customer.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import customer1 from './assets/customer.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Customer() {
  return (
    <div data-aos="fade-up">
        
        <div className='row container-fluid review justify-content-center'>
            <div className='col-md-5'>
                <div style={{marginTop:"100px"}}>
                    <h4>Hear From Some of Our Customers</h4>
                    <p>If you are looking to outsource, EHS can help you manage HR, payroll, benefits, and more. </p>
                </div>
            </div>


            {/* <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
</div> */}



            <div className='col-md-6'>
                <div>
                <div className="contain">
      <OwlCarousel
        id="owl-carousel"
        className="owl-carousel owl-theme"
        loop
        margin={30}
        nav
        items={1}
      >
        <div className="">
            <div>
                <div className='d-flex justify-content-center gap-3'>
                    <img src={customer1} className='customer-image' alt="" />
                    <div>
                        <h5 className='mt-3'>Kelly Ennis, Founder and Managing Principal</h5>
                        <p>The Verve Partnership</p>
                    </div>
                </div>
                <p className='customer-content'>“In working with Paychex, it has given me the freedom to work on the business knowing that our payroll is being taken care of and being managed day to day, and I don’t have to worry about it, which is beautiful.”</p>
            </div>
        </div>
        <div className="">
        <div>
                <div className='d-flex justify-content-center gap-3'>
                    <img src={customer1} className='customer-image' alt="" />
                    <div>
                        <h5 className='mt-3'>Kelly Ennis, Founder and Managing Principal</h5>
                        <p>The Verve Partnership</p>
                    </div>
                </div>
                <p className='customer-content'>“In working with Paychex, it has given me the freedom to work on the business knowing that our payroll is being taken care of and being managed day to day, and I don’t have to worry about it, which is beautiful.”</p>
            </div>
        </div>
        <div className="">
        <div>
                <div className='d-flex justify-content-center gap-3'>
                    <img src={customer1} className='customer-image' alt="" />
                    <div>
                        <h5 className='mt-3'>Kelly Ennis, Founder and Managing Principal</h5>
                        <p>The Verve Partnership</p>
                    </div>
                </div>
                <p className='customer-content'>“In working with Paychex, it has given me the freedom to work on the business knowing that our payroll is being taken care of and being managed day to day, and I don’t have to worry about it, which is beautiful.”</p>
            </div>
        </div>
        <div className="">
        <div>
                <div className='d-flex justify-content-center gap-3'>
                    <img src={customer1} className='customer-image' alt="" />
                    <div>
                        <h5 className='mt-3'>Kelly Ennis, Founder and Managing Principal</h5>
                        <p>The Verve Partnership</p>
                    </div>
                </div>
                <p className='customer-content'>“In working with Paychex, it has given me the freedom to work on the business knowing that our payroll is being taken care of and being managed day to day, and I don’t have to worry about it, which is beautiful.”</p>
            </div>
        </div>
        <div className="">
        <div>
                <div className='d-flex justify-content-center gap-3'>
                    <img src={customer1} className='customer-image' alt="" />
                    <div>
                        <h5 className='mt-3'>Kelly Ennis, Founder and Managing Principal</h5>
                        <p>The Verve Partnership</p>
                    </div>
                </div>
                <p className='customer-content'>“In working with Paychex, it has given me the freedom to work on the business knowing that our payroll is being taken care of and being managed day to day, and I don’t have to worry about it, which is beautiful.”</p>
            </div>
        </div>
        <div className="">
        <div>
                <div className='d-flex justify-content-center gap-3'>
                    <img src={customer1} className='customer-image' alt="" />
                    <div>
                        <h5 className='mt-3'>Kelly Ennis, Founder and Managing Principal</h5>
                        <p>The Verve Partnership</p>
                    </div>
                </div>
                <p className='customer-content'>“In working with Paychex, it has given me the freedom to work on the business knowing that our payroll is being taken care of and being managed day to day, and I don’t have to worry about it, which is beautiful.”</p>
            </div>
        </div>
      </OwlCarousel>
    </div>
                </div>
            </div>
        </div>



        <div className='row container-fluid'>
            <div className='col-md-12 slide2'>
                <div className='mover-12'></div>
                

            </div>
        </div>
    </div>
  )
}

export default Customer