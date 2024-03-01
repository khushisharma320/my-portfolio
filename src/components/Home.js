import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";


const Home = ({theme}) => {
    return (
        <div name="Home" className="relative" data-aos="zoom-out">
            <div className="absolute text-white w-full top-32 lg:top-16 text-center">
                <h2 className="mt-32 lg:mt-48 mb-8 text-6xl font-extrabold tracking-wide">KHUSHI <span className="text-yellow-700">SHARMA</span></h2>
                <h2 className="text-4xl inline">I'm a <span className="font-extrabold"> 
                <Typewriter 
                words={["FrontEnd Developer", "Web Developer", "Web Designer"]}
                loop={Infinity}
                cursor
                cursorBlinking={false}
                cursorColor="#a16207"
                typeSpeed={70}
                deleteSpeed={50}
                />
                 </span></h2>
                <div className="flex justify-center">
                <button type="button" className="text-white bg-gradient-to-b from-yellow-500 to-yellow-700 px-6 py-3 mt-16 mx-auto flex items-center rounded-md hover:scale-110 duration-400">Portfolio <FaArrowRight /></button>
                </div>
            </div>
            <div className="">
                <img className="w-full h-screen" src="/bg.avif" alt="" />
            </div>
        </div>
    )
}

export default Home;
