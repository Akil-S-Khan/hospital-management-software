import React from "react";
import ActivityOverView from "../components/dashboard/ActivityOverView";
import DashboardAppointment from "../components/dashboard/DashboardAppointment";
import Layout from "../components/common/Layout";
import DashboardEducationContent from "../components/dashboard/DashboardEducationContent";
import DashboardPatientFee from "../components/dashboard/DashboardPatientFee";
import MedicineGraph from "../components/dashboard/MedicineGraph";

const DashboardPage = () => {
  return (
    <Layout title="Dashboard">
      <div className="m-2 pt-2 ms-2">
        <div className="px-4 py-2 d-flex justify-content-between h-50">
          <ActivityOverView />
          <DashboardAppointment />
        </div>
        <div className="px-4 py-2 d-flex justify-content-between gap-3 h-50">
          <DashboardEducationContent />
          <MedicineGraph />
          <DashboardPatientFee />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
