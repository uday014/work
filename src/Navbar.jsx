import React, {useEffect, useState} from 'react'
import logo from './assets/logo.png'
import './css/Navbar.css'

function Navbar() {

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div>
      <nav className={isNavbarFixed ? 'navbar navbar-expand-lg bg-body-tertiary navbar-top-fix' : 'navbar navbar-expand-lg bg-body-tertiary navbar-top' }>
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-top"> */}
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={logo} className='logo' alt="" />
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navigate justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 justify-content-end gap-2">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style={{color:"black"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Services
          </a>
          <ul class="dropdown-menu drop">
            <li><a class="dropdown-item" href="#">Temporary Staffing Payroll Support</a></li>
            <li><a class="dropdown-item" href="#">Permanent Staffing</a></li>
            <li><a class="dropdown-item" href="#">Payroll Support</a></li>
            <li><a class="dropdown-item" href="#">Background Verification</a></li>
            <li><a class="dropdown-item" href="#">Legal Compliance Outsourcing</a></li>
            <li><a class="dropdown-item" href="#">HR and Compliance Audit</a></li>
            <li><a class="dropdown-item" href="#">HR and Compliance Training</a></li>
            <li><a class="dropdown-item" href="#">Business Processes</a></li>
            <li><a class="dropdown-item" href="#">Contractual Hiring</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style={{color:"black"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu drop">
            <li><a class="dropdown-item" href="#">HRMS</a></li>
            <li><a class="dropdown-item" href="#">GuruPayroll</a></li>
            <li><a class="dropdown-item" href="#">CRM</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Blog</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Career</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact us</a>
        </li>
       
      </ul>
      <button className="top-button" type="submit">Request a Demo</button>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar