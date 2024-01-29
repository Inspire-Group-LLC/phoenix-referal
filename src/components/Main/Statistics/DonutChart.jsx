import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import React from "react";

Chart.register(ArcElement);
function calculatePercentage(array) {
    const targetValue = array[array.length - 1];
    const count = array.filter(value => value === targetValue).length;
    const percentage = Math.round((count / array.length) * 100);
    return percentage;
}


const DonutChart = () => {

    const data = {
        labels: [],
        datasets: [
            {
                // data: {[value.trash, value.reject, value.uncertain,value.success  ]}
                data: [3, 6, 9, 10],
                backgroundColor: ['#000000', '#E60000', '#E87309', '#01d492'],
                borderColor: ['#000000', '#E60000', '#E87309', '#01d492']
            }
        ]
    };

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = '500 24px Montserrat';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${calculatePercentage(data.datasets[0].data)}%`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
        }
    }
    return (
        <>

            <Doughnut
                data={data}
                plugins={[textCenter]}
            >
            </Doughnut>

        </>
    )
}

export default DonutChart;