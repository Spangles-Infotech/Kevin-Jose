import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "./Components/Properties.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Builder from "./Components/Builder";
import Myproperties from "./Components/Myproperties";
import { Mypropertiesdetail } from "./Components/Mypropertiesdetail";
import Otp from "./Components/Otp";
import { Mobilenumber } from "./Components/Mobilenumber";
import Home from "./Components/Home";
import Posting from "./Components/Posting";
import Result from "./Components/Result";
import Budget from "./Components/Budget";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newotp from "./Components/Newotp";
import Rent from "./Components/Rent";
import Lease from "./Components/Lease";
import Postcheck from "./Components/Postcheck";
import Dashboard from "./admin/Compontes/Dashboard";
import withSideBarLayout from "./admin/Navbar/Sidebar";
import Properties from "./admin/Compontes/Propertiess";
import Enquired from "./admin/Compontes/Enquired";
import Signedin from "./admin/Compontes/Signedin ";
import Employeeprofile from "./admin/Compontes/Employeeprofile";
import Attendance from "./admin/Compontes/Attendance";
import Expense from "./admin/Compontes/Expense ";
import Selling from "./admin/Pages/Selling";
import Employee from "./admin/Pages/Employee";
import EmployeeDetails from "./admin/Pages/EmployeeDetails";
import Attendancecal from "./admin/Pages/Attendancecal";
import ExpenseAdd from "./admin/Pages/ExpenseAdd";
import AddEmployee from "./admin/Pages/AddEmployee";
import AddEmployeUpdate from "./admin/Pages/AddEmployeUpdate";
import Propertiessatues from "./admin/Pages/Propertiessatues";
 


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rent" element={<Rent />} />
          <Route path="/Lease" element={<Lease />} />
          <Route path="/builder/:id" element={<Builder />} />
          <Route path="/myproperties" element={<Myproperties />} />
          <Route path="/detail/:id" element={<Mypropertiesdetail />} />
          <Route path="/otpverify" element={<Otp />} />
          <Route path="/mobile" element={<Mobilenumber />} />
          <Route path="/post" element={<Posting />} />
          <Route path="/result" element={<Result />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/new-path" element={<Newotp />} />
          <Route path="/check" element={<Postcheck />} />
          {/*  */}
          <Route
            path="/Dashboard"
            element={withSideBarLayout(<Dashboard />, true)}
          />
          <Route
            path="/Properties"
            element={withSideBarLayout(<Properties />, true)}
          />
          <Route
            path="/Enquired"
            element={withSideBarLayout(<Enquired />, true)}
          />
          <Route
            path="/Signedin"
            element={withSideBarLayout(<Signedin />, true)}
          />
          <Route
            path="/Employeeprofile"
            element={withSideBarLayout(<Employeeprofile />, true)}
          />
          <Route
            path="/Attendance"
            element={withSideBarLayout(<Attendance />, true)}
          />
          <Route
            path="/Expense"
            element={withSideBarLayout(<Expense />, true)}
          />
       

        {/* useNavigate PATH PAGES */}
        <Route
          path="/Selling/:id"
          element={withSideBarLayout(<Selling />, true)}
        />
        <Route
          path="/Employee/:user_id"
          element={withSideBarLayout(<Employee />, true)}
        />
        <Route
          path="/EmployeeDetails/:employee_code"
          element={withSideBarLayout(<EmployeeDetails />, true)}
        />
        <Route
          path="/Attendancecal/:employee_code"
          element={withSideBarLayout(<Attendancecal />, true)}
        />
        <Route
          path="/ExpenseAdd"
          element={withSideBarLayout(<ExpenseAdd />, true)}
        />

        <Route
          path="/AddEmployee"
          element={withSideBarLayout(<AddEmployee />, true)}
        />
        <Route
          path="/AddEmployeUpdate/:employee_code"
          element={withSideBarLayout(<AddEmployeUpdate />, true)}
        />
        <Route
          path="/Propertiessatues/:id"
          element={withSideBarLayout(<Propertiessatues />, true)}
        />
         </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
