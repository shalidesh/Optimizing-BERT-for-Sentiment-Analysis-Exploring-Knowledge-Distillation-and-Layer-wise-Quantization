import React from 'react'
import LeftBar from '../components/LeftBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import OverallFeedback from '../components/OverallFeedback'


function AllFeedback() {

  const user =false
  return (
    <div id="wrapper">

        <LeftBar/>

        <div id="content-wrapper" className="d-flex flex-column" style={{paddingLeft:'220px'}}>
            <div id="content">

                <TopBar/>

                <OverallFeedback/>

                
               

            </div>
            
            <Footer/>
        </div>
    
    </div>
  )
}

export default AllFeedback