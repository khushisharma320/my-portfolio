import React from 'react';


const Headings = ({name, icon}) => {
  return (
    <div className="pt-40 pb-20" data-aos="flip-right">
        <h2 className="font-bold text-4xl flex justify-center text-white">{name} <span className="text-yellow-700 pl-4">{icon}</span></h2>
    </div>
  )
}

export default Headings;