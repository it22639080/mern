import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Dash from "../sideDash/sideDash";
import Cat from "./fff.jpg";
//import jsPDF from "jspdf";
export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [feed, setfeed] = useState([]);
 

  useEffect(() => {
    const fetchfeed = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/auth/gefeedall`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
            setfeed(data.Feed);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchfeed();
  }, []);

 



  // const generatePDF = () => {
  //   const doc = new jsPDF();
  //   let yPos = 10;

  //   // Add feedback details to PDF
  //   doc.setFontSize(16);
  //   doc.text(20, yPos, "Feedback Details:");
  //   yPos += 10;

  //   feed.forEach((feed) => {
  //     doc.setFontSize(12);
  //     doc.text(20, yPos, `Tilte: ${feed.tilte}`);
  //     doc.text(20, yPos + 5, `Date: ${feed.createdAt}`);
  //     doc.text(20, yPos + 10, `Description: ${feed.desc}`);
  //     yPos += 25;
  //   });

  //   // Save the PDF
  //   doc.save("Notification_gmy.pdf");
  // };








  return (
    

    <div>
              {/* <div className="flex justify-center items-center  mt-4 gap-2">
                <button
                  className="hidden sm:inline  hover:underline bg-yellow-300 hover:opacity-55 text-black font-bold py-2 px-4  rounded-full"
                  type="button"
                  onClick={() => generatePDF()}
                  
                >
                  Generate Report
                </button>
              </div> */}

    <div className="h-[600px] relative"> {/* Added relative class */}
        <img src={Cat} alt="" className="w-full h-full object-cover" /> 
        <div className="absolute top-0 left-0">   {/* Positioned Dash component here */}
              <Dash />
            </div> {/* Added object-cover class */}
           
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
        
        <div className="w-[1000px]  h-[400px] bg-white rounded-3xl">
        <div className="max-h-80 mt-4 overflow-y-auto">
        <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.ismanger ? (
        <>
          <table className="w-full divide-y divide-gray-200 shadow-md">
            <thead className="bg-black bg-opacity-20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                 type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Description
                </th>
               
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">

           
              {feed.map((fee) => (
                <tr
                  key={fee._id}
                  className="bg-black bg-opacity-50 text-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{fee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{fee.Email}</td>
                 
                  <td className="px-6 py-4 whitespace-nowrap">
                    {fee.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {fee.descrp}
                  </td>
                  

                  
                  
                </tr>
              ))}
              
             
            </tbody>
          </table>
        </>
      ) : (
        <p>You have no users yet!</p>
      )}
    </div>
       </div>
      </div>

        </div>
      </div>




     









    
    </div>
  );
}
