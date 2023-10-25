import React from 'react'
import caImg1 from '../../Images/box-img-5.png'; 
import caImg2 from '../../Images/box-img-4.png'
const UtilizeAutomation = () => {
  return (
    <div   className='my-36'>
    <div className='m-auto  flex flex-col items-center	 mt-24'  >

    <h2  style={{"color" : "#3b2d69"}} className="text-2xl md:text-2xl lg:text-4xl font-bold capitalize  " >
        Not Sure how to utilize automation 
      </h2>
      <h2  style={{"color" : "#3b2d69"}} className="text-2xl md:text-2xl lg:text-4xl font-bold pb-8 capitalize  " >or Ai in your business </h2>
    </div>

    <div className='flex flex-col md:flex-row items-center justify-center'>

  <div className="w-full md:w-4/12 flex flex-col items-center py-6 rounded-xl	 shadow-md mb-4 md:mb-0">
    <div className='w-64 h-64'>
      <img src={caImg1} alt="" />
    </div>
    <button
      className="px-6 py-3 text-white bg-purple-600 rounded-full text-xs md:text-base mt-2"
      href="#"
      style={{   boxShadow: "inset -10px 0 10px 0 #9c70cb" }}
    >
      View Some Solution Examples
    </button>
  </div>

  <div className='self-center mx-6'>
    <h1  style={{"color" : "#222051"}} className='text-2xl md:text-4xl font-bold '>OR</h1>
  </div>

  <div className="w-full md:w-4/12 flex flex-col items-center py-6 rounded-xl	 shadow-md">
    <img src={caImg2} alt="" />
    <div className='my-2 text-center'>
      <h1 className='text-indigo-900 text-md md:text-md font-bold capitalize'>We'll jump into your</h1>
      <h1 className='text-indigo-900 text-md md:text-md font-bold capitalize'>business and find the gaps</h1>
    </div>
    <button
      className="px-6 py-3 text-white bg-purple-600 rounded-full text-xs md:text-base mt-2"
      href="#"
      style={{   boxShadow: "inset -10px 0 10px 0 #9c70cb"}}
    >
      Book Your Free Automation & AI Audit
    </button>
  </div>

</div>

    

    </div>
  )
}

export default UtilizeAutomation