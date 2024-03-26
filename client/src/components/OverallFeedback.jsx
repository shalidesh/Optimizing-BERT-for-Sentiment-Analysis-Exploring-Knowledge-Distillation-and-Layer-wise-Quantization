import React from 'react'
import PieChart from './PieChart'
import BarChart from './BarChart'
import { saveAs } from 'file-saver';
import axios from 'axios';
import { Link } from "react-router-dom";

function OverallFeedback() {

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {

      axios.get('../data.xlsx', {
        responseType: 'blob',
      })
      .then((res) => {
        const blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        saveAs(blob, 'data.xlsx');
      });
      
      
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className='container' style={{paddingLeft:'50px'}}>

        <h1><b>OVERALL RESULTS</b></h1>
        <div className='row' style={{paddingLeft:'50px'}}>
            <div className="col-6">
                <PieChart/>

            </div>
            <div className="col-6">
                <BarChart/>

            </div>
          
        </div>

        <div className="row">
              <div className="col-4" style={{paddingLeft:'50px'}}>
              <Link to="/data.xlsx" target="_blank" download>
                <button type="submit" className="btn btn-primary mt-5" >
                  Download Result
                </button>  
                </Link>

              </div>
              
              <div className="col-4">

                <Link to="/data.xlsx" target="_blank" download>

                  <button type="submit" className="btn btn-primary mt-5" >
                    Download Dataset
                  </button>  
                </Link>

              </div>
            </div>


    </div>

    
  )
}

export default OverallFeedback
