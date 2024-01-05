import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const Cards = (props) => {
    let data=props.review;
 return (
    <div className="flex flex-col md:relative ">
      <div className="absolute top-[-2rem] left-[5rem] z-[10] mx-auto">
        {/* for doing the image circular we can write aspect-square and rounded full istead of giving the same width and height */}
        <img className="rounded-full w-24 h-24 z-[25]" src={data.image} alt="img" />
      {/* ab image ke peeche ek circle purple color ka bhar nikal rha h and ye image se niche h toh iska z index image se thod kam */}
      <div className="w-24 h-24 rounded-full bg-violet-500 absolute top-[0.5rem] left-1 z-[-10]"></div>
      </div>
     <div className="text-center mt-7">
         <h1 className="text-2xl font-bold">{data.name}</h1>
    </div> 
    <div className="text-center mt-4">
         <h3 className="text-gray-500 text-sm uppercase">{data.job}</h3>
    </div>
    <div className="mt-5 text-violet-400 mx-auto">
        <i><FaQuoteLeft /></i>
    </div>
      <p className="mt-5 text-center px-5 opacity-90">{data.text}</p>
      <div className="mt-5 text-violet-400 mx-auto">
        <i><FaQuoteRight /></i>
      </div>
   </div> 
 )
 }


export default Cards; 