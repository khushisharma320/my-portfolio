import React from 'react';
import Headings from './Global/Headings';
import { FaRegUser } from "react-icons/fa";



const About = () => {
    return (
        <div name="About" className="w-full h-screen  text-white text-center lg:pb-40">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 lg:flex-row lg:pb-40">

                <div className="flex flex-col justify-center" data-aos="fade-down">
                    <Headings name="About" icon={<FaRegUser />} />
                    <p className="px-10 pb-8">I am an experienced System Engineer with 1 year and 3 months of
                        experience across Infosys Pvt. Ltd. Proficient in Next JS, React JS,
                        JavaScript, Bootstrap, Material UI, HTML5, CSS3 and Responsive
                        Design. Seeking new challenges, I am driven to solve real-world
                        problems and contribute to my team's success. Constantly learning
                        and staying up to date with industry trends., I actively engage with
                        clients to ensure timely delivery and exceed expectations.</p>
                    <p className="hidden lg:px-10 lg:block">
                        I have worked as a Front-end Developer, contributing to the UI aspect
                        of the application using technologies such as ReactJS, Bootstrap,
                        and Material UI. My responsibilities included ensuring
                        responsiveness, implementing HTML5, CSS, and JavaScript.
                        Additionally.
                    </p>
                    <a className="hidden lg:block uppercase text-yellow-700 font-extrabold mt-10 border-2 border-yellow-700 w-52 p-4 mx-auto" href="www.google.com">Download Resume</a>
                </div>
                <div className="border-4 w-60 lg:w-full lg:mt-40" data-aos="slide-up">
                    <img className="shadow-xl shadow-zinc-600 hover:shadow-sm " src="/images/about.avif" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;
