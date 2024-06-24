import "react-circular-progressbar/dist/styles.css";



import Dash from "../sideDash/sideDash";
import Cat from "./fff.jpg";
import  { useState, useEffect } from 'react';


export default function Dashbord() {


 
  const [User, setUser] = useState([]);
  const [feed, setfeed] = useState([]);


  useEffect(() => {
    const fetchitems = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/auth/getUser`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
            setUser(data.user);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchitems();
  }, []);


  useEffect(() => {
    const fetchfeed = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/auth/gefeedall`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
            setfeed(data.Feed);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchfeed();
  }, []);




  
  return (
    <div>
      <div className="h-[600px] relative"> {/* Added relative class */}
        <img src={Cat} alt="" className="w-full h-full object-cover" /> 
        <div className="absolute top-0 left-0">   {/* Positioned Dash component here */}
              <Dash />
            </div> {/* Added object-cover class */}
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
          <div className="max-w-lg mx-auto p-3 w-full relative"> {/* Added relative class */}
            
              
              <div className="flex items-center justify-center gap-4 mt-[-250px]">
              <h1 className="my-4 text-center font-serif text-6xl  text-slate-100 shadow-lg shadow-black ">Manage </h1>
              <h1 className="my-4 text-center font-serif text-6xl  text-slate-100 shadow-lg shadow-black">Dashbord </h1> 

              </div>
            
      
            
            <div className=" flex justify-center items-center gap-14 mt-5">
            <div className="bg-red-500 mt-4 ml-10 rounded-lg h-40 w-[200px] bg-opacity-80 grid place-items-center border border-red-700 border-x-4 shadow-lg ">
               <h1 className="text-white text-lg font-times font-bold text-center"> Users</h1>
            <p className="text-4xl text-white "> {User.length}</p>
              </div>

              <div className="bg-green-500 mt-4 ml-10 rounded-lg h-40 w-[200px] bg-opacity-70 grid place-items-center border border-green-700 border-x-4 shadow-lg ">
               <h1 className="text-white text-lg font-times font-bold text-center"> All feedback</h1>
            <p className="text-4xl text-white "> {feed.length}</p>
              </div>
              </div>
              

            
              
              
          </div>
        </div>
      </div>
    </div>
  );
}
