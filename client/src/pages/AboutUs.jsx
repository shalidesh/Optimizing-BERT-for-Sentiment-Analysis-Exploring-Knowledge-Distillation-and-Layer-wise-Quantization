import React from 'react'
import LeftBar from '../components/LeftBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer';
import AboutUSDetails from '../components/AboutsUSDetails';
import { useParams } from 'react-router-dom';

function AboutUs() {

  const { id } = useParams();

  return (
    <div id="wrapper">

      <LeftBar/>

      <div id="content-wrapper" className="d-flex flex-column" style={{paddingLeft:'220px'}}>
          <div id="content">

              <TopBar/>
              <AboutUSDetails/>
              

          </div>
          
          <Footer/>
      </div>

  </div>
  )
}

export default AboutUs