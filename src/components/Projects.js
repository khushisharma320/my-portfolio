import React from 'react';
import { RiHandbagLine } from "react-icons/ri";
import Headings from './Global/Headings';


const Projects = () => {

  

    const links = [
        {
            src: "/images/weather.png",
            codeLink: "https://github.com/khushisharma320/weatherApp.git",
            demoLink: "https://github.com/khushisharma320/weatherApp.git",
            name: "Weather Website"
        },
        {
            src: "/images/resturant.png",
            codeLink: "https://github.com/khushisharma320/happystore.git",
            demoLink: " https://khushisharma320.github.io/happystore/",
            name: "Resturant Website"
        },
        {
            src: "/images/clinic.png",
            codeLink: "https://github.com/khushisharma320/clinic.github.io.git",
            demoLink: "https://khushisharma320.github.io/clinic.github.io/",
            name: "Clinic Website"
        },
        {
            src: "/images/notes.png",
            codeLink: "https://github.com/khushisharma320/react_notes.git",
            demoLink: "https://github.com/khushisharma320/react_notes.git",
            name: "React Notes"
        },
        {
            src: "/images/bootstrap.png",
            codeLink: "https://github.com/khushisharma320/iCoder.github.io.git",
            demoLink: "https://khushisharma320.github.io/bootstrap.github.io/",
            name: "Bootstrap Templete"
        },
        {
            src: "/images/icoder.png",
            codeLink: "https://github.com/khushisharma320/iCoder.github.io.git",
            demoLink: "https://khushisharma320.github.io/iCoder.github.io/",
            name: "Icoder"
        }
    ]

    return (

        <div name="Projects">
            <div className="text-white mt-20 lg:mt-0">
                <Headings name="Projects" icon={<RiHandbagLine/>}/>
            </div>
            <div className="flex flex-col justify-center items-center pb-20 lg:flex-row lg:flex-wrap">
                {
                    links.map(({src, codeLink, demoLink, name}) => {
                        return (
                            <div className="w-96 pt-4 shadow-xl shadow-black  mt-8 lg:ml-8 overflow-hidden" data-aos="slide-up">
                              
                                <img className="mt-[-16px] h-48 hover:scale-[1.1] transition-all duration-1000 overflow-hidden" src={src} alt="" />
                                <h4 className="text-center text-yellow-700 font-bold pt-4 uppercase">{name}</h4>
                                <div className="flex justify-around text-white py-8 text-xl">
                                <a className="hover:scale-105 duration-200" href={codeLink} target='_blank' rel="noreferrer">Code</a>
                                <a className="hover:scale-105 duration-200" href={demoLink} target='_blank' rel="noreferrer">Demo</a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Projects;
