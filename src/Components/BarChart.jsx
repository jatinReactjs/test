import React from "react";
import ReactEcharts from "echarts-for-react";

function BarChart() {
  const option = {
    title: {
      text: "Bar Chat",
    },

    xAxis: {
      name: "Alchol",
      nameLocation: "middle",
      nameGap: 35,
      axisLine: {
        lineStyle: {
          color: "#666",
        },
      },
      splitLine: {
        lineStyle: {
          color: "#ddd",
        },
      },

      data: ["a1", "a2", "a3", "a4", "a5", "a6", "a7"],
    },

    yAxis: {
      name: "Malic Acid",
      nameLocation: "middle",
      nameGap: 35,
      axisLine: {
        lineStyle: {
          color: "#666",
        },
      },
      splitLine: {
        lineStyle: {
          color: "#ddd",
        },
      },
    },

    series: [
      {
        data: [1, 2, 3, 4, 5, 6, 7],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  return <ReactEcharts option={option} />;
}
export default BarChart;
