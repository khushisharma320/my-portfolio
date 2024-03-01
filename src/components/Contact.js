import React from 'react';
import { FiPhone } from "react-icons/fi";
import Headings from './Global/Headings';

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-full  text-white lg:pb-40">
      <div className="">
        <div className="text-white" >
            <Headings name="Contact Me" icon={<FiPhone/>}/>
        </div>
        <div className="flex justify-center items-center px-8" data-aos="zoom-out">
            <form action="https://getform.io/f/7axY3qby" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent rounded-md text-white focus:outline-none mt-8 shadow-lg shadow-gray-800"/>
                <input type="text" name="email" placeholder="Enter Your Email" className="p-2 bg-transparent rounded-md focus:outline-none mt-10 shadow-lg shadow-gray-800"/>
                <textarea name="message" rows="10" className="p-2 bg-transparent rounded-md text-white mt-10 shadow-lg shadow-gray-800 focus:outline-none" placeholder="Write Message...."></textarea>
                <button type="submit" className="text-white bg-gradient-to-b from-yellow-500 to-yellow-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-400">Let's talk</button>
            </form>
        </div>
      </div>

    </div>
  )
}

export default Contact;
