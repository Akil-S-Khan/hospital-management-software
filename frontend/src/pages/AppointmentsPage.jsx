import React from "react";
import Layout from "../components/common/Layout";
import Appointment from "../components/appointment/Appointment";

const AppointmentsPage = () => {
  return (
    <Layout title={"Appointments"}>
      <div className="m-4 h-110">
        <Appointment />
      </div>
    </Layout>
  );
};

export default AppointmentsPage;
