import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// ---------------------- DATA ----------------------
export const data = {
  labels: ["Paracetamol ml", "Vitamin Tablets", "Antacid Tablets", "Others"],
  datasets: [
    {
      label: "Medicine Sold",
      data: [55, 12, 25, 8],
      backgroundColor: ["#3497f9", "#4EE578", "#A056FF", "#FFEE55"],
      borderWidth: 0,
    },
  ],
};

// ---------------------- PERCENTAGE PLUGIN ----------------------
const percentagePlugin = {
  id: "percentagePlugin",
  afterDraw(chart) {
    const { ctx, chartArea } = chart;
    const dataset = chart.data.datasets[0];
    const total = dataset.data.reduce((a, b) => a + b, 0);

    chart.getDatasetMeta(0).data.forEach((slice, index) => {
      const { x, y } = slice.tooltipPosition();
      const value = dataset.data[index];
      const percentage = ((value / total) * 100).toFixed(0);

      ctx.save();
      ctx.fillStyle = "#000"; // black color text
      ctx.font = " 10px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${percentage}%`, x, y);
      ctx.restore();
    });
  },
};

// ---------------------- OPTIONS ----------------------
export const options = {
  cutout: "60%",
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function (context) {
          const arr = context.chart.data.datasets[0].data;
          const total = arr.reduce((a, b) => a + b, 0);
          const percentage = ((context.raw / total) * 100).toFixed(0);
          return `${percentage}%`;
        },
      },
    },
  },
};

function MedicineGraph() {
  const colors = data.datasets[0].backgroundColor;
  const labels = data.labels;

  return (
    <div className="card shadow-lg p-4" style={{ width: "35%" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="m-0">Top Medicines Sold</h5>

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
            <li><a className="dropdown-item" href="#">Daily</a></li>
            <li><a className="dropdown-item" href="#">Weekly</a></li>
            <li><a className="dropdown-item" href="#">Monthly</a></li>
            <li><a className="dropdown-item" href="#">Yearly</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">All</a></li>
          </ul>
        </div>
      </div>

      {/* LEFT LIST + RIGHT DOUGHNUT */}
      <div className="d-flex justify-content-between align-items-center">

        {/* LEFT LIST */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {labels.map((item, idx) => (
            <li key={idx} className="d-flex align-items-center mb-2">
              <span
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: colors[idx],
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: 8,
                }}
              ></span>
              {item}
            </li>
          ))}
        </ul>

        {/* RIGHT CHART (slightly bigger now) */}
        <div style={{ width: "150px", height: "150px" }}>
          <Doughnut data={data} options={options} plugins={[percentagePlugin]} />
        </div>

      </div>
    </div>
  );
}

export default MedicineGraph;
