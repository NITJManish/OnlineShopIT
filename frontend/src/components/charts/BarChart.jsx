import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
const BarChart = () => {
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
labels: labels,
datasets: [
{
label: "product",
backgroundColor: "rgb(255, 99, 132)",
borderColor: "rgb(255, 99, 132)",
data: [0, 10, 5, 2, 20, 30, 45],
},
{
    label: "sale",
    backgroundColor: "rgb(123, 20, 132)",
    borderColor: "rgb(123, 20, 132)",
    data: [0, 10, 5, 2, 20, 30, 45],
    },
],
};
return (
<div>
<Bar data={data} />
</div>
);
};
export default BarChart;