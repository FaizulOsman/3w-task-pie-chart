import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ChartJs = () => {
  // React Chart JS
  const data = {
    labels: ["OPTION A", "OPTION B", "OPTION C", "OPTION D", "OPTION E"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 2, 2, 2, 2],
        backgroundColor: [
          "#fcb702",
          "#98c417",
          "#1d548d",
          "#2badea",
          "#f52384",
        ],
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [3, 3, 3, 3, 3],
        backgroundColor: ["lightgray"],
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [4, 4, 4, 4, 4],
        backgroundColor: ["white"],
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [6, 6, 6, 6, 6],
        backgroundColor: [
          "#1d548d",
          "#f52384",
          "#98c417",
          "#fcb702",
          "#2badea",
        ],
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [7, 7, 7, 7, 7],
        backgroundColor: ["white"],
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [9, 11, 13, 15, 17],
        backgroundColor: [
          "#1d548d",
          "#f52384",
          "#98c417",
          "#fcb702",
          "#2badea",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Chart.js</h1>
      <PolarArea data={data} />
    </div>
  );
};

export default ChartJs;
