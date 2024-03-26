import React from 'react'
import {Image1,Image2,Image3} from '../assets/img/index'

function AboutsUSDetails() {
  return (

    

    <div className='container' style={{padding:'75px'}}>

        <div className="row">
            <h1 className="font-weight-bold">ABOUT US</h1>

            <p>As we navigate the aftermath of the pandemic and settle back into in-person learning, 
                'SLUniSentiment' aims to capture the nuanced experiences of Sri Lankan university 
                students during the pivotal transition from online to physical classrooms. 
                Beyond merely cataloging these experiences as positive, negative, or neutral, 
                this project seeks to provide a data-driven reflection that informs future 
                educational strategies and supports systems. The importance of understanding these sentiments 
                extends far beyond the immediate return to physical classrooms.</p>

            <p>It offers invaluable insights into the resilience and adaptability of the educational ecosystem, 
                helping educators, policymakers, and institutions to better prepare for any future disruptions. 
                By examining the emotional and academic impacts of such a significant shift, we contribute to a 
                deeper understanding of student well-being and engagement, ensuring that the lessons learned 
                during this unique period enrich the future of education.</p>

        </div>

        <div className="row">
            <div className="col-4">
            <img 
                    src={Image1} 
                    className="rounded float-left" 
                    alt="..." 
                    style={{
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain'
                    }}
                />

            </div>
            <div className="col-4">
            <img 
                    src={Image2} 
                    className="rounded float-left" 
                    alt="..." 
                    style={{
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain'
                    }}
                />

            </div>
            <div className="col-4">
            <img 
                    src={Image3} 
                    className="rounded float-left" 
                    alt="..." 
                    style={{
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain'
                    }}
                />

            </div>
        </div>
       


      
    </div>
  )
}

export default AboutsUSDetails
