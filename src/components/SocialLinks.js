import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            name: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            name: (
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href: "https://github.com/khushisharma320"     
        },
        {
            id: 3,
            name: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:erkhushisharma07@gmail.com"
        },
        {
            id: 4,
            name: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: "/Resume_khushi_sharma.pdf",
            style: "rounded-br-md",
            download: true
        },
    ];
    
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
            <ul>
                {
                    links.map(({id, name, href, style, download})=>{
                        return (

                            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-yellow-700 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-500 " + style }><a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">{name}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SocialLinks;
