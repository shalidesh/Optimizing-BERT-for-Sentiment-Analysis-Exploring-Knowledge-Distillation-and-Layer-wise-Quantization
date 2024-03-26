import React from 'react';
import { useContext, useRef } from "react";
import LeftBar from '../components/LeftBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Dashboard from './Dashboard'
import DashboardNotUser from '../components/DashboardNotUser';
import { Context } from '../context/Context';

function Home() {

  const { user } = useContext(Context);


  return (
    <div id="wrapper">

        <LeftBar/>

        <div id="content-wrapper" className="d-flex flex-column" style={{paddingLeft:'220px'}}>
            <div id="content">

                <TopBar/>
                {user? <Dashboard/> : <DashboardNotUser/>}
               

            </div>
            
            <Footer/>
        </div>
    
    </div>
  )
}

export default Home