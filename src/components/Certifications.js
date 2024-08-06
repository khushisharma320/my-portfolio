import React from 'react';
import { GrCertificate } from "react-icons/gr";
import Headings from './Global/Headings';


const Certifications = () => {

    const Links = [
        {
            id : 1,
            image : "images/certificate1.jpg"
        },
        {
            id : 2,
            image : "images/certi2.jpg"
        },
    ];

  return (
    <div>
      <div name="Certifications">
       
      
           <Headings name="Certifications" icon={<GrCertificate/>} />

           <div className="flex flex-col justify-evenly items-center pb-20 lg:flex-row lg:flex-wrap">
               
       {
                       Links.map(({id, image}) => {
                           return (
                               <div key={id} className="box-border border-8 border-sky-800 mt-10" data-aos="flip-left">
                                       <img className = "w-60 h-52 lg:h-[400px] lg:w-[500px]" src={image} alt='certificate'/>
                               </div>
                           )
                       })
                   }

           
           </div>
           </div>
       </div>

  )
}

export default Certifications;
