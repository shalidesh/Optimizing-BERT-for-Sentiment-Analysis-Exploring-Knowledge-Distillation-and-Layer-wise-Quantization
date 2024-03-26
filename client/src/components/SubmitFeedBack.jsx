import React, { useState } from 'react';
import axios from "axios";
import SampleFeedback from './SampleFeedback';
import { Link } from "react-router-dom";

function SubmitFeedBack() {

    const [feeback, setFeedback] = useState('');
    const [score, setScore] = useState('');

    const result=true;

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
          const response = await axios.post('/predict', {
            feeback
          });

          console.log(response.data);
          
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <div className='container' style={{padding:'75px'}}>

      <div className="rwo">

         <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Enter Your Feedback</label>
                <input type="text" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                onChange={(event) =>setFeedback(event.target.value)}
                placeholder="Enter Feedback"/>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit Feedback</button>
        </form>
        <Link to="/allfeedback">
          {result && (
            <button type="submit" className="btn btn-primary mt-3" >
              Overall Result
            </button>
          )}
        </Link>

        

      </div>

      <SampleFeedback/>
  
    </div>
  )
}

export default SubmitFeedBack
