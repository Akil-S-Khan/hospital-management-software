import React from "react";
import Layout from "../components/common/Layout";
import EducationContent from "../components/education/EducationContent";

const EducationContentPage = () => {
  return (
    <Layout>
      <div className="py-2 px-4 h-100">
        <EducationContent />
      </div>
    </Layout>
  );
};

export default EducationContentPage;
