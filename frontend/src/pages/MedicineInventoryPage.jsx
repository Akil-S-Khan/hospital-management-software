import React from "react";
import Layout from "../components/common/Layout";
import MedicineInventoryTable from "../components/medicine/MedicineInventoryTable";

const MedicineInventoryPage = () => {
  return (
    <Layout title={"Medicine Inventory"}>
      <div className="p-4">
        <MedicineInventoryTable />
      </div>
    </Layout>
  );
};

export default MedicineInventoryPage;
