import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PatientPage from "./pages/PatientPage";
import Login from "./components/Login";
import Layout from "./components/common/Layout";
import AppointmentsPage from "./pages/AppointmentsPage";
import DoctorPage from "./pages/DoctorPage";
import MessagesPage from "./components/Message/Message";
import MedicinePage from "./components/MedicineInventory/MedicineInventory";
import EducationContent from "./components/EducationContent/EducationContent";
import SettingPage from "./components/settings/Settings";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout pageTitle="Dashboard">
              <DashboardPage />
            </Layout>
          }
        />

        {/* Patient Page */}
        <Route
          path="/patient"
          element={
            <Layout pageTitle="Patient Details">
              <PatientPage />
            </Layout>
          }
        />

        {/* Appointment Page */}
        <Route
          path="/Appointments"
          element={
            <Layout pageTitle="Appointment">
              <AppointmentsPage />
            </Layout>
          }
        />

        {/* Doctor Page */}
        <Route
          path="/Doctor"
          element={
            <Layout pageTitle="Doctor">
              <DoctorPage />
            </Layout>
          }
        />

        {/* Message Page */}
        <Route
          path="/Messages"
          element={
            <Layout pageTitle="Messages">
              <MessagesPage />
            </Layout>
          }
        />

        {/* Medicine Inventory Page */}
        <Route
          path="/Medicine-Inventory"
          element={
            <Layout pageTitle="Medicine Inventory">
              <MedicinePage />
            </Layout>
          }
        />

        {/* Education Content Page */}
        <Route
          path="/Education-content"
          element={
            <Layout pageTitle="Education Content">
              <EducationContent />
            </Layout>
          }
        />

        {/* Settings Page */}
        <Route
          path="/Settings"
          element={
            <Layout pageTitle="Settings">
              <SettingPage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
