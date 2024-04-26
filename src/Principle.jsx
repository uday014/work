import React, {useEffect, useState} from 'react'
import './css/Principle.css'

function Principle() {

    const [cursorX, setCursorX] = useState(0);

    useEffect(() => {
      const updateCursor = (e) => {
        setCursorX(e.clientX);
      };
  
      window.addEventListener('mousemove', updateCursor);
  
      return () => {
        window.removeEventListener('mousemove', updateCursor);
      };
    }, []);



  return (
    <div data-aos="fade-up">
      <div style={{backgroundColor:"#469EA9",position:"relative"}} className='container-fluid'>
        <i style={{ left: `${cursorX}px`,marginLeft:"-25px" }} class="fa-solid fa-caret-up shape"></i>
        <div className='text-center pt-5 pb-5'>
            <h1 style={{fontSize:"2.9rem",color:"white"}}>Principles of our work</h1>
        </div>
        <div className='row container-fluid ps-5 pe-5 mt-5 pb-5'>
            <div className='col-md-4'>
                <div className='prin-cont'>
                    <div>
                    <i class="fa-solid fa-0 number"></i><i class="fa-solid fa-1 number">.</i>
                    </div>
                    <h1>Client-centric approach</h1>
                    <p>We understand that every organization is unique, with distinct HR needs and challenges. We work closely with our clients to tailor our services to their specific requirements, at the center of everything we do allows us to deliver customized, effective, and value-driven HR services.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='prin-cont'>
                    <div>
                    <i class="fa-solid fa-0 number"></i><i class="fa-solid fa-2 number">.</i>
                    </div>
                    <h1>Expertise and innovation</h1>
                    <p>We leverage the latest HR technologies and best practices to streamline processes, improve efficiency, and enhance the overall HR experience for our clients. With a commitment to excellence, we provide cutting-edge solutions that empower organizations to manage their talent effectively.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='prin-cont'>
                    <div>
                    <i class="fa-solid fa-0 number"></i><i class="fa-solid fa-3 number">.</i>
                    </div>
                    <h1>Integrity and compliance</h1>
                    <p>We uphold the highest standards of integrity and compliance. Our comprehensive knowledge of labor laws, regulations, and industry standards ensures that our clients remain compliant with HR and legal requirements. You can rely on us to maintain the utmost confidentiality and ethical standards in all our HR services.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Principle