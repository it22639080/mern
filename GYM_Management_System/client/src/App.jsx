import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckBMI from "./pages/CheckBMI/CheckBMI";
import DashProfile from "./pages/DashProfile/DashProfile";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import PrivateManger from "./pages/PrivateManager/PrivateManger";

import Feed from "./pages/Feedback/Feedback";
import Getfeed from "./pages/GetFeedback/GetFeedback";
import Feedup from "./pages/FeedUpdata/FeedUpdata";
import Form from "./pages/Form/Form";
import Notifi from "./pages/Notification/Notification";
import ViewNotifi from "./pages/ViewNotifi/ViewNotifi";
import Dashbord from "./pages/Dashbord/Dashbord";
import Viewuser from "./pages/ViewUser/ViewUser";
import Viewuserall from "./pages/Viewallfeedback/Viewallfeedback";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashbord" element={<Dashbord/>} />
       

        <Route element={<PrivateRoute />}>
         
          <Route path="/feed" element={<Feed/>} />
          <Route path="/Feedpage" element={<Getfeed />} />
          <Route path="/update-warehous/:feedId" element={<Feedup />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/viewnotifi" element={<ViewNotifi/>} />
          <Route path="/checkbmi" element={<CheckBMI/>} />
          <Route path="/dashprofil" element={<DashProfile/>} />
          
        </Route>


        <Route element={<PrivateManger />}>
      
        <Route path="/notification" element={<Notifi/>} />
      
        <Route path="/viewuser" element={<Viewuser/>} />
        <Route path="/viewuserall" element={<Viewuserall/>} />
        
        
        </Route>

        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
