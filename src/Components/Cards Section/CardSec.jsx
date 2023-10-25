import React from 'react'
import caImg1 from '../../Images/box-img-1.png'; 
import caImg2 from '../../Images/box-img-2.png'
import caImg3 from '../../Images/box-img-3.png'


const CardSec = () => {
  return (
    <>
    <div    className='flex  flex-col justify-center  w-4/5	 m-auto '    >

    <div    className='items-start	' >
    <h4 class="text-pink-500 uppercase font-bold">Core Services</h4>

    <h1 class="text-indigo-900 text-4xl font-bold mb-4">We help you...</h1>

    </div>



<div    className='flex flex-wrap' >
<div   class="max-w-sm mx-auto rounded-lg overflow-hidden  p-4">
  <div class="bg-purple-100 rounded-2xl p-4">
    <img class="w-full" src={caImg1} alt="Card Image" />
  </div>
  <div class="px-6 py-4">
    <div class="text-indigo-900 font-semibold text-xl uppercase">Automation All Stars</div>
  </div>
  <ul class="px-6 py-2 list-inside list-disc space-y-2">
    <li class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li class="text-gray-700 text-base">
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
  </ul>
</div>
<div class="max-w-sm mx-auto rounded-lg overflow-hidden shadow-md p-4">
  <div class="bg-purple-100 rounded-2xl p-4">
    <img class="w-full" src={caImg2} alt="Card Image" />
  </div>
  <div class="px-6 py-4">
    <div class="text-indigo-900 font-semibold text-xl uppercase">AI Adventures "</div>
  </div>
  <ul class="px-6 py-2 list-inside list-disc space-y-2">
    <li class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li class="text-gray-700 text-base">
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
  </ul>
</div>
<div class="max-w-sm mx-auto rounded-lg overflow-hidden shadow-md p-4">
  <div class="bg-purple-100 rounded-2xl p-4">
    <img class="w-full" src={caImg2} alt="Card Image" />
  </div>
  <div class="px-6 py-4">
    <div class="text-indigo-900 font-semibold text-xl uppercase">Global Dream Teambox"</div>
  </div>
  <ul class="px-6 py-2 list-inside list-disc space-y-2">
    <li class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </li>
    <li class="text-gray-700 text-base">
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </li>
  </ul>
</div>




</div>


    </div>
    
    </>
  )
}

export default CardSec