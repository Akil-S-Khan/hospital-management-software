import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Paracetamol ml", "Vitamin Tablets", "Antacid Tablets", "Others"],
  datasets: [
    {
      label: "Medicine Sold",
      data: [55, 12, 25, 8],
      backgroundColor: ["#3497F9", "#4EE578", "#A056FF", "#FFEE55"],
      border: "none",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // hides the legend
    },

    datalabels: {
      color: "#fff",
      font: {
        size: 14,
        weight: "light",
      },
      formatter: (value, context) => {
        const dataArr = context.chart.data.datasets[0].data;
        const total = dataArr.reduce((acc, val) => acc + val, 0);
        const percentage = ((value / total) * 100).toFixed(0);
        return `${percentage}%`;
      },
    },
  },
  cutout: "50%", // optional: makes the doughnut hole larger
};

const MedicineGraph = () => {
  return (
    <div className="p-3 shadow-lg bg-white rounded" style={{ width: "35%" }}>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Medicine Sold</h5>
        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Daily
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Weekly
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Monthly
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Yearly
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                All
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <div className="d-flex flex-column gap-2 w-50">
          {/* First list */}
          <div className="d-flex justify-content-start align-items-center gap-2">
            <div className="medicineGraphList blueList"></div>
            <div>Paracetamol</div>
          </div>

          {/* Second List */}
          <div className="d-flex justify-content-start align-items-center gap-2">
            <div className="medicineGraphList greenList"></div>
            <div>Vitamin Tablets</div>
          </div>

          {/* Third List */}
          <div className="d-flex justify-content-start align-items-center gap-2">
            <div className="medicineGraphList purpleList"></div>
            <div>Antacid Tablets</div>
          </div>

          {/* Fourth List */}
          <div className="d-flex justify-content-start align-items-center gap-2">
            <div className="medicineGraphList yellowList"></div>
            <div>Others</div>
          </div>
        </div>
        <div className="w-50">
          <Doughnut
            style={{ width: "35%", height: "35%" }}
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default MedicineGraph;
