import React from "react";
import "./App.css";
import reviews from "./data";
import Testimonials from "./components/Testimonials"; 
function App() {
  
  return (

        <div className="flex flex-col bg-gray-200 w-[100vw] h-[100vh]">
     
     <div className="my-auto">

     <div className="text-center ">
    <h1 className="text-3xl font-bold mx-auto" >Our Testimonials</h1>
    <div className="max-w-[8%] mx-auto  h-1 bg-purple-400"></div>
      </div>
      

        <Testimonials reviews={reviews}/>
      
    </div>
     </div>
   
    
    
   
  );
}

export default App;
