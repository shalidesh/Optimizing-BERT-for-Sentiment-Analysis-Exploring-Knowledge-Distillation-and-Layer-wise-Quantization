import React from 'react'

function SampleFeedback() {
  return (
    <div>
         <h3 className='mt-4'>Sample Feedbacks</h3>
        <div class="card text-center mt-3 bg-primary text-white">
          <div class="card-header bg-info text-white">
            <b>POSITIVE</b>
          </div>
          <div class="card-body">
            <h5 class="card-title">Sentiment Score: 0.9</h5>
            <p class="card-text">"The face-to-face lectures were much more engaging and interactive than online."</p>
          </div>
        </div>

        <div class="card text-center mt-3 bg-primary text-white">
          <div class="card-header bg-warning text-dark">
            <b>NEGATIVE</b>
          </div>
          <div class="card-body">
            <h5 class="card-title">Sentiment Score: 0.2</h5>
            <p class="card-text">"The face-to-face lectures were much more engaging and interactive than online."</p>
          </div>
        </div>

        <div class="card text-center mt-3 bg-primary text-white">
          <div class="card-header bg-secondary text-white">
            <b>NEUTRAL</b>
          </div>
          <div class="card-body">
            <h5 class="card-title">Sentiment Score: 0.5</h5>
            <p class="card-text">"The face-to-face lectures were much more engaging and interactive than online."</p>
          </div>
        </div>
      
    </div>
  )
}

export default SampleFeedback
