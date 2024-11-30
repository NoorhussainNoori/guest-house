import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Rooms from "./Components/Room/Rooms";
import ContactUs from "./Components/ContactUs/ContactUs";

import {
  AuthProvider,
  useAuth,
} from "./Components/Contexts/authContext/authContext";
import Dashboard from "./Components/Dashboard/Dashboard";
import SignIn from "./Components/SignIn/SignIn";
import BookingTable from "./Components/Dashboard/bookingTable/BookingTable";
import ConferenceTable from "./Components/Dashboard/ConferenceBooking/ConferenceBooking";
import ContactsTable from "./Components/Dashboard/ContactTable/ContactsTable";

const PrivateRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();
  return userLoggedIn ? children : <Navigate to="/login" />;
};

const RouterList = () => {
  return (
    <Routes>
      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/room-bookings" element={<BookingTable />} />
          <Route
            path="dashboard/conference-bookings"
            element={<ConferenceTable />}
          />
          <Route
            path="dashboard/contact-requests"
            element={<ContactsTable />}
          />
        </Route>
        <Route path="/login" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default RouterList;
