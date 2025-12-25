import React from "react";
import Layout from "../components/common/Layout";
import Patient from "../components/patients/Patient";

const PatientsPage = () => {
  return (
    <Layout title={"Patients"}>
      <div className="pt-4 px-4 h-88">
        <Patient />
      </div>
    </Layout>
  );
};

export default PatientsPage;
