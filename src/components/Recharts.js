import React from "react";
import { PieChart, Pie } from "recharts";

const data01 = [
  { name: "Group A", value: 300, fill: "#fcb702" },
  { name: "Group B", value: 300, fill: "#98c417" },
  { name: "Group C", value: 300, fill: "#1d548d" },
  { name: "Group D", value: 300, fill: "#2badea" },
  { name: "Group E", value: 300, fill: "#f52384" },
];
const data02 = [{ name: "A1", value: 1000, fill: "lightgray" }];
const data04 = [
  { name: "Group B", value: 300, fill: "#98c417" },
  { name: "Group A", value: 300, fill: "#fcb702" },
  { name: "Group D", value: 300, fill: "#2badea" },
  { name: "Group E", value: 300, fill: "#f52384" },
  { name: "Group C", value: 300, fill: "#1d548d" },
];
const data05 = [
  { name: "Group B", value: 300, fill: "white" },
  { name: "Group A", value: 300, fill: "#fcb702" },
  { name: "Group D", value: 300, fill: "#2badea" },
  { name: "Group E", value: 300, fill: "#f52384" },
  { name: "Group C", value: 300, fill: "#1d548d" },
];
const data06 = [
  { name: "Group B", value: 300, fill: "white" },
  { name: "Group A", value: 300, fill: "#fcb702" },
  { name: "Group D", value: 300, fill: "#2badea" },
  { name: "Group E", value: 300, fill: "#f52384" },
  { name: "Group C", value: 300, fill: "white" },
];
const data07 = [
  { name: "Group B", value: 300, fill: "white" },
  { name: "Group A", value: 300, fill: "#fcb702" },
  { name: "Group D", value: 300, fill: "#2badea" },
  { name: "Group E", value: 300, fill: "white" },
  { name: "Group C", value: 300, fill: "white" },
];
const data08 = [
  { name: "Group B", value: 300, fill: "white" },
  { name: "Group A", value: 300, fill: "#fcb702" },
  { name: "Group D", value: 300, fill: "white" },
  { name: "Group E", value: 300, fill: "white" },
  { name: "Group C", value: 300, fill: "white" },
];

const Recharts = () => {
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={30} />
        <Pie
          data={data02}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={30}
          outerRadius={40}
        />
        <Pie
          data={data04}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={50}
          outerRadius={80}
        />
        <Pie
          data={data04}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={90}
          outerRadius={120}
        />
        <Pie
          data={data05}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={120}
          outerRadius={135}
        />
        <Pie
          data={data06}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={135}
          outerRadius={150}
        />
        <Pie
          data={data07}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={150}
          outerRadius={165}
        />
        <Pie
          data={data08}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={165}
          outerRadius={180}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default Recharts;
