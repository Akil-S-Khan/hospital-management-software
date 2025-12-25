import React from "react";
import Layout from "../components/common/Layout";
import Doctor from "../components/doctor/Doctor";

const DoctorsPage = () => {
  return (
    <Layout title="Doctors">
      <div className="m-4 ps-2">
        <Doctor />
      </div>
    </Layout>
  );
};

export default DoctorsPage;
