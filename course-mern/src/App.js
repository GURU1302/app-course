import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header/Header"
import Courses from "./components/Courses/Courses"
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Layout/NotFound/NotFound';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Users from './components/Admin/Users/Users';
import Createcourses from './components/Admin/Createcourses/Createcourses';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Sidebar from './components/Admin/Sidebar';
function App() {
  return (
   <Router>
   <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/courses" element={<Courses />} />
         <Route path="/courses/:id" element={<CoursePage />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/request" element={<Request />} />
         <Route path="/login" element={<Login />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/changepassword" element={<ChangePassword />} />
         <Route path="/updateprofile" element={<UpdateProfile />} />
         <Route path="/paymentfail" element={<PaymentFail />} />
         <Route path="/paymentsuccess" element={<PaymentSuccess />} />
         <Route path="/subscribe" element={<Subscribe />} />
         <Route path="/*" element={<NotFound />} />
         <Route path="/register" element={<Register />} />
         <Route path="/forgetpassword" element={<ForgetPassword />} />
         <Route path="/resetpassword:token" element={<ResetPassword />} />

         {/* //admin routes */}
         <Route path="/admin/dashboard" element={<Dashboard />} />
         <Route path="/admin/users" element={< Users/>} />
         <Route path="/admin/createcourse" element={< Createcourses/>} />
         <Route path="/admin/admincourses" element={< AdminCourses/>} />
         <Route path="/admin/sidebar" element={<Sidebar />} />

       </Routes>

       <Footer />
   </Router>
    
  );
}

export default App;
