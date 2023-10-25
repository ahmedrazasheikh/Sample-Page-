import React from 'react';
import banner_Image from '../../Images/banner.png';

const Banner = () => {
  return (
    <div style={{ "position": "relative" }} className="flex flex-col items-center mb-24 ">
    <div style={{ "position": "absolute", "left": "10%", "top": "30%" }} className="text-2xl font-bold mb-4 text-indigo-900">
    <h2
  style={{ color: "#3b2d69" }}
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold"
>
  Transform
</h2>
<h2
  style={{ color: "#3b2d69" }}
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold pb-8"
>
  Your Business
</h2>
<h2
  style={{ color: "#3b2d69", fontFamily: "monospace" }}
  className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl"
>
  Efficiency with Automation,
</h2>
<h2
  style={{ color: "#3b2d69", fontFamily: "monospace" }}
  className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl pb-8"
>
  AI, and outsourced teams
</h2>

<button
  className=" lg:px-8 lg:py-2 py-1 px-4" // Adjust padding for different screen sizes
  style={{
    alignItems: "center",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    backgroundColor: "#7638b5",
    textTransform: "uppercase",
    borderRadius: "3.75rem",
    color: "#fff",
    display: "flex",
    fontFamily: "Manrope, sans-serif",
    fontSize: "0.8rem",
    fontWeight: 500,
    justifyContent: "center",
    maxWidth: "20rem",
    boxShadow: "inset -10px 0 10px 0 #9c70cb",
  }}
  href="#"
>
  Get Started
</button>

    </div>
    <img src={banner_Image} alt="" />
  </div>
  
  
  );
}

export default Banner;
