import React from 'react'
import blogBanner from './assets/blog-banner.jpg'
import './css/Blog.css'
import blog1 from './assets/blog1.jpg'

function Blog() {
  return (
    <div>
        <div className='blog-banner'>
            <img src={blogBanner} className='img-fluid banner-back' alt="" />
            <div className='blog-content'>
                <h1>Blog</h1>
                <div className='hori-line'></div>
                <p>TalentPro’s Human Resources blog is a knowledge portal where we discuss the latest and best practices related to the Human Resources Industry. The portal educates the reader in various areas of interest such as Payroll, Compliances, Staffing, Human Resource Management Services (HRMS), Recruiting, etc.</p>

            </div>
        </div>

        <div className='row container-fluid blog-category'>
            <div className='col-md-8'>
                <div>
                    <h1>Blog categories</h1>
                    <div className='d-flex mt-3 category-list'>
                        <h5 className='rounded-pill'>All</h5>
                        <h5 className='rounded-pill'>Compilance</h5>
                        <h5 className='rounded-pill'>HR consulting</h5>
                        <h5 className='rounded-pill'>IT Staffing</h5>
                        <h5 className='rounded-pill'>Payroll</h5>
                        <h5 className='rounded-pill'>PoSH</h5>
                        <h5 className='rounded-pill'>Recruitment</h5>
                        <h5 className='rounded-pill'>Staffing</h5>
                    </div>
                </div>

                <div className='row'>
                   <div>
                      <img src={blog1} alt="" />
                   </div>
                </div>
            </div>

            <div className='col-md-4'>
                <h1>Featured posts</h1>
            </div>

        </div>
        
    </div>
  )
}

export default Blog