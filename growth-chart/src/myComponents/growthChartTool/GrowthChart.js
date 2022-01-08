
import "chart.js/auto";
import { Chart } from "react-chartjs-2";


const GrowthChart = ({chartData}) => {
    return (
        <div>
              <Chart
        type="line"
        data={chartData}
        options= {{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Professional Growth Chart'
              }
            }
          }}
      />
        </div>
    )
}

export default GrowthChart
