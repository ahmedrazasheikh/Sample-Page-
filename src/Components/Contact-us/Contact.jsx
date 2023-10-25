import React from 'react'
import img from '../../Images/box-img-6.png'

const Contact = () => {
  return (
    <>
     
    <section style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" , zIndex : "1",  position : "relative", bottom : -40 }} className="bg-white dark:bg-gray-900 flex flex-col lg:flex-row justify-center w-11/12 lg:w-9/12 mx-auto rounded-2xl items-center py-4 lg:py-0">
  <div className="lg:w-1/2 self-center lg:self-auto">
    <img src={img} alt="Contact Us" />
  </div>
  <div className="lg:w-1/2 py-4 px-4 max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
    <p className="mb-8 capitalize lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Feel free to contact us today to learn about our expert services</p>
    <form action="#" className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Enter Full Name"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
        <input
          type="text"
          id="phone"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Enter Phone Number"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input
          type="text"
          id="email"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Enter Email Address"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
        <textarea
          id="message"
          rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Write Your Message...."
        ></textarea>
      </div>
      <div className="flex justify-center lg:justify-end">
      <button
  className="px-8 py-3"
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
    maxWidth: "20rem",
    boxShadow: "inset -10px 0 10px 0 #9c70cb", // Changed the shadow to the right side
  }}
  href="#"
>
  Submit
</button>


      </div>
    </form>
  </div>
</section>



    </>
  )
}

export default Contact