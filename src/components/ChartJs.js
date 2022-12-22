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
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ChartJs = () => {
  // ================= Data of ChartJs =================
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
        borderWidth: [0, 3, 0, 0, 0],
        borderAlign: "inner",
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
        <h3 className="text-xs md:text-xl lg:text-5xl font-bold sm:text-[#2badea]">
          17%
        </h3>
      </div>
      <div className="absolute hidden sm:block top-[28%] left-[22%] text-right text-gray-500">
        <img src={icon1} className="w-5 md:w-7 lg:w-16" alt="" />{" "}
      </div>
      <div className="absolute top-[54%] sm:top-[50%] left-[25%] sm:left-[18%] text-right text-gray-500">
        <h3 className="text-xs md:text-xl lg:text-5xl font-bold sm:text-[#fcb702]">
          15%
        </h3>
      </div>
      <div className="absolute hidden sm:block top-[63%] left-[22%] text-right text-gray-500">
        <img src={icon5} className="w-5 md:w-7 lg:w-16" alt="" />{" "}
      </div>
      <div className="absolute bottom-[27%] sm:bottom-[22%] left-[46%] sm:left-[40%] text-right text-gray-500">
        <h3 className="text-xs md:text-md lg:text-5xl font-bold sm:text-[#98c417]">
          13%
        </h3>
      </div>
      <div className="absolute hidden sm:block bottom-[22%] right-[40%] text-right text-gray-500">
        <img src={icon4} className="w-4 md:w-6 lg:w-16" alt="" />{" "}
      </div>

      <div className="absolute top-[55%] sm:top-[50%] right-[27%] sm:right-[25%] lg:right-[23%] text-right text-gray-500">
        <h3 className="text-xs md:text-md lg:text-4xl font-bold sm:text-[#f52384]">
          11%
        </h3>
      </div>
      <div className="absolute hidden sm:block top-[63%] right-[30%] text-right text-gray-500">
        <img src={icon3} className="w-4 md:w-5 lg:w-12" alt="" />{" "}
      </div>

      <div className="absolute top-[32%] md:top-[33%] lg:top-[29%] right-[37%] lg:right-[40%] text-right text-gray-500">
        <h3 className="text-xs md:text-md lg:text-4xl font-bold md:text-[#1d548d]">
          9%
        </h3>
      </div>
      <div className="absolute hidden lg:block top-[37%] right-[33%] lg:right-[31%] text-right text-gray-500">
        <img src={icon2} className="w-3 md:w-4 lg:w-10" alt="" />{" "}
      </div>
    </div>
  );
};

export default ChartJs;
