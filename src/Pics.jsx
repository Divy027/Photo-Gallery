import React from "react";

const Pics = ({ src,FullSrc, alt, photographer,profileURL, description })=> {  //using props
    return (
        // main div
        <div className="p-4"> 
            {/* pic div */}
           <div className="relative  group">   
                <img  src={src} alt={alt} className="w-full h-32 object-cover rounded"/>

                <a href={FullSrc} target="_blank" className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">

                <button className="px-4 py-2 bg-gray-800 text-white rounded">
                    View
                </button>

                </a>

             </div>
            
            {/* description and profile div  */}
            <div className="flex justify-between items-center"> 
                <div className="mr-2 "> 
                 <img className=" rounded-3xl h-10 w-10 " src={profileURL}/> 
                </div>
                <div className="mr-auto ml-auto"> 
                    <h3 className="text-lg font-bold mt-4"> {photographer}</h3>
                    <p className="text-sm">{description} </p> 
                </div>
            </div>
           
           
               
        </div>
    );
}; 

export default Pics
