"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750, 5000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3", "Bank 4"],
  };

  return (
    <Doughnut
      data={data}
      options={{ cutout: "60%", plugins: { legend: { display: false } } }}
    />
  );
};

export default DoughnutChart;
