import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import icon1 from "../assets/icons/icon1.png";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ChartJs = () => {
  // React Chart JS
  const data = {
    // labels: ["OPTION B", "OPTION C", "OPTION D", "OPTION E", "OPTION A"],
    datasets: [
      {
        data: [2, 2, 2, 2, 2],
        backgroundColor: [
          "#fcb702",
          "#98c417",
          "#1d548d",
          "#2badea",
          "#f52384",
        ],
        borderWidth: 0,
      },
      {
        data: [3, 3, 3, 3, 3],
        backgroundColor: ["lightgray"],
        borderWidth: 0,
      },
      {
        data: [4, 4, 4, 4, 4],
        backgroundColor: ["white"],
        borderWidth: 0,
      },
      {
        data: [6, 6, 6, 6, 6],
        backgroundColor: [
          "#1d548d",
          "#f52384",
          "#98c417",
          "#fcb702",
          "#2badea",
        ],
        borderWidth: 0,
      },
      {
        data: [7, 7, 7, 7, 7],
        backgroundColor: ["white"],
        borderWidth: 0,
      },
      {
        data: [7.1, 7.1, 7.1, 7.1, 7.1],
        backgroundColor: ["lightgray"],
        borderWidth: 0,
      },
      {
        data: [9, 11, 13, 15, 17],
        backgroundColor: "#fff",
        borderColor: ["#1d548d", "#f52384", "#98c417", "#fcb702", "#2badea"],
        borderJoinStyle: "miter",
        borderAlign: "inner",
        borderWidth: 25,
      },
    ],
  };

  return (
    <div className="relative">
      <PolarArea data={data} />
      <div className="absolute top-[27%] sm:top-[19%] md:top-[18%] lg:top-[17%] left-[30%] sm:left-[32%] md:left-[35%] text-right text-gray-500">
        <h3 className="text-sm md:text-xl font-bold sm:text-[#2badea]">17%</h3>
      </div>
      <div className="absolute hidden sm:block top-[28%] left-[22%] text-right text-gray-500">
        <img src={icon1} className="w-5 md:w-7 h-5 md:h-7" alt="" />{" "}
      </div>
      <div className="absolute top-[54%] sm:top-[50%] left-[25%] sm:left-[18%] text-right text-gray-500">
        <h3 className="text-sm md:text-xl font-bold sm:text-[#fcb702]">15%</h3>
      </div>
    </div>
  );
};

export default ChartJs;
