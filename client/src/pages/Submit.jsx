import React from 'react'
import LeftBar from '../components/LeftBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import SubmitFeedBack from '../components/SubmitFeedBack'


function Submit() {

  const user =false
  return (
    <div id="wrapper">

        <LeftBar/>

        <div id="content-wrapper" className="d-flex flex-column" style={{paddingLeft:'220px'}}>
            <div id="content">

                <TopBar/>

                <SubmitFeedBack/>
               
               

            </div>
            
            <Footer/>
        </div>
    
    </div>
  )
}

export default Submit