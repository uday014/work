import React from 'react'
import './css/Demorequest.css'

function Demorequest() {
  return (
    <div data-aos="fade-up">
        <div className='text-center leading-main' style={{paddingLeft:"100px",paddingRight:"100px"}}> 
            <h2 className='mb-3'>A leading HR service provider</h2>
            <h6 className='leading'>Join hands with TalentPro India, your HR partner with a rich experience of over 25 years in collaborating with organizations.

Our comprehensive end-to-end HR services and solutions are driven by deep domain expertise, ensuring

you get the best support for your HR needs

</h6>
        </div>

     <div className='row container-fluid p-0 request'>
        <div className='col-md-4'>
            <div className='req-left'>
            <h1 className='req-left-head'>Request
a demo or quote now!</h1>
           <h5  data-aos="fade-right" className='mt-4' style={{color:"#FFC42D"}}>Let’s discover the ideal solution for your business.</h5>
            </div>
        </div>

        <div className='col-md-5'>
            <div data-aos="zoom-out-left" className='form rounded-5'>
                <div className='d-flex'>
                    <div className='me-2' style={{width:"100%"}}>
                    <label>Name</label> <br />
                    <input type="text" placeholder='Name' style={{width:"100%",borderRadius:"14px"}} />
                    </div>
                    <div style={{width:"100%"}}>
                    <label>Email</label> <br />
                    <input type="text" placeholder='Email' style={{width:"100%",borderRadius:"14px"}} />
                    </div>
                </div>

                <div className='d-flex mb-0'>
                    <div className='me-2' style={{width:"100%"}}>
                    <label>Mobile Number</label> <br />
                    <input type="text" placeholder='Mob number' style={{borderRadius:"14px"}} />
                    </div>
                    <div style={{width:"100%"}}>
                        <label>Service Type</label> <br />
                    <div class="input-group mb-3">
  <select class="form-select" style={{borderRadius:"14px"}} id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
                    </div>
                </div>


                <div>
                    <label>Company name</label>
                    <br />
                    <input type="text" style={{width:"100%",borderRadius:"14px"}} placeholder='Company Name' />
                </div>

                <div>
                <label>Comments</label>
                    <br />
                    <input type="text" style={{width:"100%",borderRadius:"14px"}} placeholder='Comments' />
                </div>

                <div className='text-end'>
                <button type="button" style={{fontSize:"1.2rem",borderRadius:"14px"}} class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
     </div>
      
    </div>
  )
}

export default Demorequest