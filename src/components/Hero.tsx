import React from "react";

const Hero = () => {
   return (
      <div
         className="hero rounded-md"
         style={{
            minHeight: "calc(100vh - 84px)",
            backgroundImage:
               "url(/KERR-130-CLARKSON-2R-01-020577-EDIT-WEB.webp)",
         }}
      >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
               <h1 className="text-6xl mb-4">Welcome to FlatHub</h1>
               <p className="font-inter text-2xl mb-5">
                  Find the perfect flatmate for your home
               </p>
               <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded shadow-lg">
                  Share Your Flat
               </button>
            </div>
         </div>
      </div>
   );
};

export default Hero;
