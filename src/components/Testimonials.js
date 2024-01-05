import React from "react";
import Cards from "./Cards";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function Testimonials(props) {
    const reviews=props.reviews;
    const[index,setIndex]=useState(0);//default starting from zero index

    function leftShiftBack(){
     
        if(index-1<0){
            setIndex(reviews.length-1);//jaise hi index -1 hua toh last card se start krdo
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftNext(){
      if(index+1>=reviews.length){
       setIndex(0); //jaise hi index +1 hua toh first card se start krdo
    }
     else{
       setIndex(index+1);
   }
    }

    function surpriseHandler(arr){
        const randomIndex=Math.floor(Math.random()*arr.length);
        setIndex(randomIndex);
    }

    return (
        <div className="w-[75vw] md:w-[600px] h-[50vh] mt-10 hover:shadow-xl transition-all duration-700 bg-white mx-auto">
            {
               
                     <Cards review={reviews[index]}/>
                }
               

      <div className=" mt-7 flex flex-row justify-center text-violet-400 text-3xl font-bold gap-3">
        <button 
        onClick={leftShiftBack}
        className="cursor-pointer hover:text-violet-500">
            <IoIosArrowBack />
        </button>
        <button  
        onClick={rightShiftNext}
        className="cursor-pointer hover:text-violet-500">
            <IoIosArrowForward />
        </button>
      </div>
       
       <div className="text-center">
       <button onClick={()=>surpriseHandler(reviews)}
      className="  bg-violet-400 text-white text-1xl px-5 py-2 font-bold cursor-pointer hover:bg-violet-600 rounded-md text-center"
      >Surprise Me
      </button>
       </div>
      
    </div> 
               
        
    );
}
export default Testimonials;