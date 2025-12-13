import React from "react";
import ActivityOverView from "../components/dashboard/ActivityOverView";
import DashAppointment from "../components/dashboard/DashAppointment";
import DashBoardEducation from "../components/dashboard/DashBoardEducation";
import DashBoardPatientfee from "../components/dashboard/DashBoardPatientfee";
import MedicineGraph from "../components/dashboard/MedicineGraph";

const DashboardPage = () => {
  return (
    <div>
      <div className="bg-color d-flex justify-content-between p-3 ">
        <ActivityOverView />
        <DashAppointment />
      </div>
      <div className="bg-color d-flex justify-content-between p-3 ">
        <DashBoardEducation />
        <MedicineGraph/>
        <DashBoardPatientfee/>
      </div>
    </div>
  );
};

export default DashboardPage;
