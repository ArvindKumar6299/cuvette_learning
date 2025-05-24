import "./About.css"

function About(){


    return(
        <div className="completeAbout">
        <div className="aboutContainer">

            <div className="left-section">
        <h2>CONTINENTAL GT 650</h2>
         <p>The updated Royal Enfield Continental GT 650 takes its inspiration from the 1970s era of British motorcycling, with its cast alloy wheels and blacked-out aesthetic. Alongside its classically-styled, ‘50s and ‘60s-inspired predecessors, it recaptures the spirit of the cafe racer culture of the time and that of our own Continental GT 250. With its sculpted tank, eager attitude and tucked-in riding position, it carries all the hallmarks of a traditional café racer, making it perfect for carving up the back roads or having a ton of fun in the city.</p>
         </div>

         <div className="right-section">
         <img  src="/slipstream_blue_0000.avif" alt="" />
         </div>
         </div>
         <div className="features">
         <h2 style={{padding:"20px" , color: "blue"}}>Features:</h2>
         <ul className="featuresList">
            <li>648cc parallel-twin, air-oil cooled engine</li>
            <li>47 horsepower @ 7,250 RPM</li>
            <li>52 Nm torque @ 5,250 RPM</li>
            <li>6-speed gearbox with slipper clutch</li>
            <li>Fuel-injected for smoother throttle response</li>
         </ul>
        
       </div> 
        </div>
    )
}

export default About;