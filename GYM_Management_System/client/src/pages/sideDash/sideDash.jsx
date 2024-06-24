

import { Link,  } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useSelector } from "react-redux";

export default function DashSidebar() {
  
 
  const { currentUser } = useSelector((state) => state.user);
  
 






  return (
    <div className=" hidden flex-col flex-shrink-0 p-3 bg-black bg-opacity-40 w-56 h-[600px]  lg:block">
      <ul className="flex flex-col space-y-1 mb-auto">
        {currentUser && currentUser && (
          <li className="nav-item">
            <Link to="/dashbord" className={`block py-2 px-4 rounded-lg hover:bg-yellow-300 hover:text-black bg-opacity-20 text-white `}>
             
              Dashboard
            </Link>
          </li>
        )}
        <li className="">
          <Link to="/viewuser" className={`block py-2 px-4 rounded-lg text-white hover:bg-yellow-300 hover:text-black `}>
          
            all user
          </Link>
        </li>
        <li className="">
          <Link to="/dashprofil" className={`block py-2 px-4 rounded-lg text-white hover:bg-yellow-300 hover:text-black `}>
          <FontAwesomeIcon icon="fa-light fausersecret" />
           profile
          </Link>
        </li>
        <li className="">
          <Link to="/notification" className={`block py-2 px-4 rounded-lg text-white hover:bg-yellow-300 hover:text-black`}>
          
            Add notification 
          </Link>
        </li>
        <li className="">
          <Link to="/viewuserall" className={`block py-2 px-4 rounded-lg text-white hover:bg-yellow-300 hover:text-black`}>
          
            all Feedback 
          </Link>
        </li>

       
        
      </ul>
      <hr className="my-2 border-gray-300" />
      
    </div>
  );
}
