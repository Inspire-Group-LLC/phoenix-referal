import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import React from "react";

Chart.register(ArcElement);
function calculatePercentage(array) {
  const total = array.reduce((acc, value) => acc + value, 0);
  const percentage = Math.round((array[2] / total) * 100);
  return percentage;
}

const DonutChart = (props) => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [+props.paid,+props.rejected, +props.in_progress, +props.done, +props.trash],
        backgroundColor: ["#0113d4","#E60000", "#E87309", "#01d492", "#641e16"],
        borderColor: ["#0113d4","#E60000", "#E87309", "#01d492", "#641e16"],
      },
    ],
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "500 24px Montserrat";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `${calculatePercentage(data.datasets[0].data)}%`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  return (
    <>
      <Doughnut data={data} plugins={[textCenter]}></Doughnut>
    </>
  );
};

export default DonutChart;
