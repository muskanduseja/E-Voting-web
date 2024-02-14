import React from 'react'
import BackgroundVideo from "./video/BackgroundVideo.mp4"
const HomePage = () => {
    return (
    <>

      <video src={BackgroundVideo} type="video/mp4" autoPlay loop muted className = "BG" />
      <center>
      <div className="box">
      
          <h1 className="hero-section1">We Belive in Democracy</h1>
          <p className="para">Pakistan constitutionally is a democratic parliamentary republic with its political system based on an elected form of governance. Since the establishment of the current system in 2003, Pakistan is one of the youngest democracies in the world.</p>
          
        
      </div>
      </center>
      </>
    )
}

export default HomePage
