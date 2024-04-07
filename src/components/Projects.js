import React from 'react';
import { RiHandbagLine } from "react-icons/ri";
import Headings from './Global/Headings';


const Projects = () => {

  

    const links = [
        {
            src: "/images/myPortfolio.png",
            codeLink: "https://github.com/khushisharma320/my-portfolio",
            demoLink: "https://khushi-sharma.netlify.com",
            name: "My Portfolio",
            tech: "React js, Tailwind CSS, React-Icons, React-Scroll"
        },
        {
            src: "/images/addToCart.png",
            codeLink: "https://github.com/khushisharma320/addToCart",
            demoLink: "https://add-to-cart-plum-theta.vercel.app/",
            name: "Add To Cart",
            tech: "React js, Redux, fontAwsome, React-bootstrap, Material UI"
        },
        {
            src: "/images/weather.png",
            codeLink: "https://github.com/khushisharma320/weatherApp.git",
            demoLink: "https://github.com/khushisharma320/weatherApp.git",
            name: "Weather Website",
            tech: "express js, JavaScript, hbs, CSS, Api Integration"
        },
        {
            src: "/images/resturant.png",
            codeLink: "https://github.com/khushisharma320/happystore.git",
            demoLink: " https://khushisharma320.github.io/happystore/",
            name: "Resturant Website",
            tech: "React js, CSS, JavaScript, BootStrap"
        },
        {
            src: "/images/notes.png",
            codeLink: "https://github.com/khushisharma320/react_notes.git",
            demoLink: "https://reactnotesapp07.netlify.app/",
            name: "React Notes",
            tech: "React js, BootStrap, Material UI, CSS"
        },
        {
            src: "/images/netflix.png",
            codeLink: "https://github.com/khushisharma320/netflix",
            demoLink: "https://moviesapp07.netlify.app/",
            name: "Netflix Movie App",
            tech: "Next JS, Tailwind CSS, API Integration, React-Icons"
        },
        {
            src: "/images/magicNotes.png",
            codeLink: "https://github.com/khushisharma320/magicNotes",
            demoLink: "https://khushisharma320.github.io/magicNotes/",
            name: "JavaScript Search App",
            tech: "HTML, CSS, Javascript, BootStrap"
        },
        {
            src: "/images/clinic.png",
            codeLink: "https://github.com/khushisharma320/clinic.github.io.git",
            demoLink: "https://clinic-07.vercel.app/",
            name: "Clinic Website",
            tech: "HTML, CSS, Javascript, BootStrap"
        },
        {
            src: "/images/icoder.png",
            codeLink: "https://github.com/khushisharma320/iCoder.github.io.git",
            demoLink: "https://i-coder-github-io-six.vercel.app/",
            name: "Icoder",
            tech: "HTML, CSS, Javascript, BootStrap"
        },
        {
            src: "/images/bootstrap.png",
            codeLink: "https://github.com/khushisharma320/iCoder.github.io.git",
            demoLink: "https://khushisharma320.github.io/bootstrap.github.io/",
            name: "Bootstrap Templete",
            tech: "HTML, CSS, Javascript, BootStrap"
        }
    ];


    return (

        <div name="Projects">
            <div className="text-white lg:mt-0">
                <Headings name="Projects" icon={<RiHandbagLine/>}/>
            </div>
            <div className="flex flex-col justify-center items-center pb-20 lg:flex-row lg:flex-wrap">
                {
                    links.map(({src, codeLink, demoLink, name, tech}) => {
                        return (
                            <div className="w-72 lg:w-96 pt-4 shadow-xl shadow-black mt-16 lg:mt-12 lg:ml-12 overflow-hidden" data-aos="slide-up">
                              
                                <img className="mt-[-16px] h-48 hover:scale-[1.1] transition-all duration-1000 overflow-hidden" src={src} alt="" />
                                <h4 className="text-center text-yellow-700 font-bold pt-4 uppercase">{name}</h4>
                                <p className="uppercase text-sky-800 font-extrabold text-center text-sm mx-4 mt-2"><span className="text-sky-400">Technology Used :</span> {tech}</p>
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
