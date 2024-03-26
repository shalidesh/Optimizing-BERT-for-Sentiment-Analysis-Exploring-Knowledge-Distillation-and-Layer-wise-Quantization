import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import {Student} from '../assets/img/index'
import { Link } from "react-router-dom";

function DashboardNotUser() {

    const breadcrumbs = [
        { label: 'Home', link: '/'},
        ];

    return (

    <div className="container-fluid">

        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <h1 className="font-weight-bold">WELLCOME !</h1>

    
        <div className="row">
            <div className='col-6'>
                <img 
                    src={Student} 
                    className="rounded float-left" 
                    alt="..." 
                    style={{
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain'
                    }}
                />
            </div>
            <div className='col-6'>
            <p className="font-weight-bold">Discover the collective pulse of Sri Lanka's university students. 
            Your shared sentences weave into the larger narrative 
            of our country's higher education saga, illuminating the experiences that shape our academic 
            culture.
            </p>
            <button type="button" class="btn btn-primary btn-lg mt-1">View Overall Results</button>
            <p className="font-weight-bold mt-5">Lend your voice to the chorus of Sri Lanka's university students and enrich the 
                national educational dialogue.</p>

                <Link to="/login">

                    <button type="button" class="btn btn-primary btn-lg">Sign in to Contribute</button>

                </Link>

            
            </div>
         
        </div>

        

    </div>
    
  )
}

export default DashboardNotUser