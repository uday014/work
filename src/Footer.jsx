import React from 'react'
import logo from './assets/logo.png'
import './css/Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer'>
           <div className='row container-fluid pt-5'>
               <div className='col-md-4 pe-4'>
                    <div>
                        <img src={logo} className='logo-foot mb-3' alt="" />
                        <p>DeliziaHR is designed with rich features and enhanced UI/UX experience for managing onboarding, payroll management, leave management, compliance management, and exit management. It is designed for businesses of all sizes and is scalable to meet any of the complex requirements of the HR Department.</p>
                    </div>
               </div>

               <div className='col-md-2 ps-5'>
                <div>
                    <h5 className='mb-4'>SERVICES</h5>
                    <p>Temporary Staffing <br /> Payroll</p>
                    <p>Permanent Staffing</p>
                    <p>Payroll Support</p>
                    <p>Background Verification</p>
                    <p>Legal Compliance <br /> Outsourcing</p>
                    <p>HR and Compliance <br /> Audit</p>
                    <p>HR and Compliance <br /> Training</p>
                    <p>Business Processes</p>
                    <p>Contractual Hiring</p>
                </div>
               </div>

               <div className='col-md-2 ps-4'>
                <div>
                    <h5 className='mb-4'>SOLUTIONS</h5>
                    <p>Solutions for SME/ Start-ups</p>
                    <p>Solutions for Mid-sized Enterprises</p>
                    <p>Solutions for MNCs/Large Enterprises</p>
                </div>
               </div>

               <div className='col-md-2 ps-5'>
                <div>
                    <h5 className='mb-4'>RESOURCES</h5>
                    <p>Blog</p>
                    <p>Case Study</p>
                    <p>Newsroom</p>
                    <p>Whitepaper</p>
                    <p>Flyer</p>
                </div>
               </div>

               <div className='col-md-2 ps-4'>
                <div>
                    <h5 className='mb-4'>COMPANY</h5>
                    <p>Our Story</p>
                    <p>Why Paysquare</p>
                    <p>Our Clients</p>
                    <p>Current Openings</p>
                    <p>Contact Us</p>
                </div>
               </div>
           </div>
           <hr />
           <h5 className='mb-4 mt-4' style={{fontWeight:"700"}}>QUICK LINKS</h5>
           <div className='row container-fluid justify-content-between mb-5'>
            <div className='col-md-3 ps-0 pe-0'>
                <div>
                    <h5 className='mb-4'>Payroll Outsourcing Services</h5>
                    <div className='d-flex gap-3 m-0'>
                    <a className='city rounded' href="">Chennai</a>
                    <a className='city rounded' href="">Hyderabad</a>
                    <a className='city rounded' href="">Bangalore</a>
                    </div>
                    <div className='d-flex gap-3'>
                    <a className='city rounded' href="">Mumbai</a>
                    <a className='city rounded' href="">Pune</a>
                    <a className='city rounded' href="">Delhi</a> 
                    </div>
                </div>
            </div>
              
            <div className='col-md-4 foot-mid'>
                <div className='ms-4'>
                    <h5 className='mb-4'>Accounting Outsourcing Services</h5>
                    <div className='d-flex gap-1 m-0'>
                    <a className='city rounded' href="">Mumbai</a>
                    <a className='city rounded' href="">Pune</a>
                    <a className='city rounded' href="">Delhi</a> 
                    </div>
                    <div className='d-flex gap-1'>
                    <a className='city rounded' href="">Chennai</a>
                    <a className='city rounded' href="">Hyderabad</a>
                    <a className='city rounded' href="">Bangalore</a>
                    </div>
                </div>
            </div>

            <div className='col-md-3'>
                <div>
                    <h5 className='mb-4'>EOR/POE Services</h5>
                    <div className='d-flex gap-1 m-0'>
                    <a className='city rounded' href="">Mumbai</a>
                    <a className='city rounded' href="">Pune</a>
                    <a className='city rounded' href="">Delhi</a>

                    </div>
                    <div className='d-flex gap-1'>
                    <a className='city rounded' href="">Chennai</a>
                    <a className='city rounded' href="">Hyderabad</a>
                    <a className='city rounded' href="">Bangalore</a>
                    </div>
                </div>
            </div>
           </div>
           <hr />

           <div className='d-flex justify-content-between pb-2 pt-2 m-0'>
            <h5 style={{fontSize:"1.1rem"}}>© 2024 All Right Reserved</h5>
            <div className='d-flex icons gap-4'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter" style={{color:"black"}}></i>
            <i class="fa-brands fa-youtube" style={{color:"red"}}></i>
            <i class="fa-brands fa-linkedin" style={{color:"#0077b5"}}></i>
            </div>
           </div>

        </div>



    </div>
  )
}

export default Footer