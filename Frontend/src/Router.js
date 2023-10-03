import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/layout/Profile";
import Dashboard from "./components/Dashboard";

//Ramona
//admin
import ViewAllRoles from "./components/admin/ViewAllRoles";
import UpdateUser from "./components/admin/UpdateUser";
import AddFuel from "./components/admin/AddFuel";
import ViewAllFuel from "./components/admin/ViewAllFuel";
import EditFuel from "./components/admin/EditFuel";
import Stock from "./components/admin/UpdateStock";
import AvailableFuel from "./components/admin/AvailableFuel";

//Disni
//admin
import AdminCheckLeave from "./components/admin/AdminCheckLeave";
import AdminLeaveViewAll from "./components/admin/AdminLeaveViewAll";
import AdminCreateSalary from "./components/admin/AdminCreateSalary";
import AdminViewSalary from "./components/admin/AdminViewSalary";
import ViewOneSalary from "./components/admin/ViewOneSalary";
import AdminUpdateSalary from "./components/admin/AdminUpdateSalary";
import AdminCheckAttendance from "./components/admin/AdminCheckAttendance";
import AdminCheckAttOne from "./components/admin/AdminCheckAttOne";

//Anodya

import Addtimetable from "./components/admin/Addtimetable";
import UpdateTimeTable from "./components/admin/UpdateTimeTable";
import ViewTimeTable from "./components/admin/ViewTimeTable";

import AddFuelReport from "./components/admin/AddFuelReport";
import ViewFuelReport from "./components/admin/ViewFuelReport";
import UpdateFuelReport from "./components/admin/UpdateFuelReport";

//customer
//Anodya
import C_ViewTimeTable from "./components/customer/C_ViewTimeTable";

//customer
//sandeepa
import SubmitAppointment from "./components/customer/SubmitAppointment";
import UpdateAppointment from "./components/customer/UpdateAppointment";
import ViewSubmittedAppointment from "./components/customer/ViewSubmittedAppointment";
import FuelSummarry from "./components/customer/FuelSummarry";

//employee
import RegisterStaff from "./components/auth/RegisterStaff";

//Disni
import EmpAttendaceMark from "./components/employee/EmpAttendaceMark";
import EmpViewAllAttendance from "./components/employee/EmpViewAllAttendance";
import EmpAttendanceUpdate from "./components/employee/EmpAttendanceUpdate";
import EmpViewOneAttendance from "./components/employee/EmpViewOneAttendance";

import EmpLeaveFormCreate from "./components/employee/EmpLeaveFormCreate";
import EmpViewAllLeaves from "./components/employee/EmpViewAllLeaves";
import EmpLeaveEdit from "./components/employee/EmpLeaveEdit";
import EmpLeaveViewOne from "./components/employee/EmpLeaveViewOne";

import EmpViewSalary from "./components/employee/EmpViewSalary";
import EmpViewOneSalary from "./components/employee/EmpViewOneSalary";

export default function Router() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/userprofile" element={<Profile />} />

          {/* employee */}

          <Route exact path="/staffRegister" element={<RegisterStaff />} />

          <Route path="/EmpAttendaceMark" element={<EmpAttendaceMark />} />
          <Route
            path="/EmpViewAllAttendance"
            element={<EmpViewAllAttendance />}
          />
          <Route
            path="/EmpAttendanceUpdate/:id"
            element={<EmpAttendanceUpdate />}
          />
          <Route
            path="/EmpViewOneAttendance/:id"
            element={<EmpViewOneAttendance />}
          />

          <Route
            path="/EmpLeaveFormCreate"
            element={<EmpLeaveFormCreate />}
          ></Route>
          <Route path="/EmpViewAllLeaves" element={<EmpViewAllLeaves />} />
          <Route path="/EmpLeaveEdit/:id" element={<EmpLeaveEdit />} />
          <Route path="/EmpLeaveViewOne/:id" element={<EmpLeaveViewOne />} />

          <Route path="/EmpViewSalary" element={<EmpViewSalary />} />
          <Route path="/EmpViewOneSalary/:id" element={<EmpViewOneSalary />} />

          {/* admin */}

          <Route exact path="/ViewAllRoles" element={<ViewAllRoles />} />
          <Route exact path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/AddFuel" element={<AddFuel />} />
          <Route path="/AdminCheckLeave/:id" element={<AdminCheckLeave />} />
          <Route path="/AdminLeaveViewAll" element={<AdminLeaveViewAll />} />
          <Route
            path="/AdminCreateSalary"
            element={<AdminCreateSalary />}
          ></Route>
          <Route path="/AdminViewSalary" element={<AdminViewSalary />}></Route>
          <Route path="/ViewOneSalary/:id" element={<ViewOneSalary />}></Route>
          <Route
            path="/AdminUpdateSalary/:id"
            element={<AdminUpdateSalary />}
          ></Route>
          <Route
            path="/AdminCheckAttendance"
            element={<AdminCheckAttendance />}
          ></Route>
          <Route
            path="/AdminCheckAttOne/:id"
            element={<AdminCheckAttOne />}
          ></Route>
          <Route path="/stock/:id" element={<Stock />}></Route>
          <Route path="/AvailableFuel" element={<AvailableFuel />}></Route>

          <Route path="/Addtimetable" element={<Addtimetable />} />
          <Route path="/ViewTimeTable" element={<ViewTimeTable />} />
          <Route path="/UpdateTimeTable/:id" element={<UpdateTimeTable />} />
          <Route path="/ViewAllFuel" element={<ViewAllFuel />} />
          <Route path="/:id" element={<EditFuel />} />

          <Route path="/AddFuelReport" element={<AddFuelReport />} />
          <Route path="/ViewFuelReport" element={<ViewFuelReport />} />
          <Route path="/UpdateFuelReport/:id" element={<UpdateFuelReport />} />

          {/* customer */}
          <Route path="/C_ViewTimeTable" element={<C_ViewTimeTable />} />

          <Route path="/SubmitAppointment" element={<SubmitAppointment />} />
          <Route
            path="/UpdateAppointment/:id"
            element={<UpdateAppointment />}
          />
          <Route
            path="/ViewSubmittedAppointment/:id"
            element={<ViewSubmittedAppointment />}
          />

          <Route path="/FuelSummarry" element={<FuelSummarry />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
