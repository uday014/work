import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Demorequest from './Demorequest'
import Whyehs from './Whyehs'
import Principle from './Principle'
import Customer from './Customer'
import Blog from './Blog'

// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";

function App() {

  return (
    <>
  
      <Navbar/>
      <Banner/>

      {/* <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          
        </Switch> */}

      <Whyehs/>
      <Principle/>
      <Demorequest/>
      <Customer/>
      <br /><br /><br />
      {/* <Blog /> */}
      <Footer/>
     
    </>
  )
}

export default App
