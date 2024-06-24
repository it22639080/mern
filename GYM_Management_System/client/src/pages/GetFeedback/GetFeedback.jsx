import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Cat from "./fff.jpg";

export default function DashUsers() {
  
  const [Feed, setFeed] = useState([]);
  //const [filter, setfilter] = useState([]);
  //const [query, setQuery] = useState(" ");

  
  const { currentUser } = useSelector((state) => state.user);
  
  const CurrentuseId = currentUser ? currentUser._id : null;
  const [FeedbackId, setFeedbackId] = useState("");

  console.log(CurrentuseId)
 
  

  
  
  
 


//feedback display useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/auth/gefeed/${CurrentuseId}`);
        const data = await response.json();
        console.log("dataa",data)
        
        

        

        if (response.ok) {
          setFeed(data.Feed); 

        } else {
          setFeed([]); 
         
          
        }
      } catch (error) {
        console.error("Error fetching bid data:", error);
      }
    };

    fetchData();
  }, [CurrentuseId]);
  


 
//delete feedback
  const handleDeleteUser = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/auth/deletefeed/${FeedbackId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (res.ok) {
        setFeed((prev) =>
          prev.filter((hous) => hous._id !== FeedbackId)
        );
        
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  



 

//  //search funtion
//  useEffect(() => {
//   if (query.trim() === "") {
//     // If the query is empty, display all data
//     setfilter([...Feed]);
//   } else {
//     // If there's a query, filter the data
//     const filteredData = Feed.filter(
//       (Feed) =>
//       Feed.email &&  Feed.email.toLowerCase().includes(query.toLowerCase())
//     );
//     setfilter(filteredData);
//   }
// }, [query, Feed]);




 


  
  

  return (
   
   <div className="h-[600px] relative">
     {/* <div className="ml-8 mt-7 flex justify-center items-center"> */}
     <img src={Cat} alt="" className="w-full h-600px object-cover" />  
     {/* <div className="ml-8 mt-[-600px] flex justify-center items-center">
        <form>
          <input
            type="text"
            placeholder="Search... "
            className=" w-[300px] h-8 mt-6 rounded-lg shadow-xl"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div> */}
      {/* </div> */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 flex justify-center items-center gap-14 mt-5">
        
        <div className="w-[1000px]  h-[400px] bg-white rounded-3xl">
        <div className="max-h-80 mt-4 overflow-y-auto">
        <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500"></div>
      {Feed && Feed.length > 0 ? (
        <>
          <table className="w-full divide-y divide-gray-200 shadow-md">
            <thead className="bg-black bg-opacity-20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Description
                </th>
                
                
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Edit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Delete
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">



            
               {Feed.map((hous) => (
                <tr
                  key={hous._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{hous.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  {hous.Email}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">{hous.descrp}</td>


                 

                 
                  
                  <td className="px-6 py-4 whitespace-nowrap">


                    
                    <Link
                      to={`/update-warehous/${hous._id}`}
                      className="text-teal-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      onClick={() => {
                        
                        handleDeleteUser();
                        setFeedbackId(hous._id);
                      }}
                      className="text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
             
            



            
  
 

            </tbody>
          </table>
        </>
      ) : (
        <p>You have No Feedback please  <Link to="/feed">
        <button className='text-yellow-300 '>click here!</button>
      </Link></p>
      )}
    </div>
    </div>
    </div> </div>
  );
}