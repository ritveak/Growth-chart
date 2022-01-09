
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import "./GrowthChart.css";


const GrowthChart = ({chartData}) => {
    return (
        <div className="chartContainer">
          <div className="chart">
              <Chart
              height={100}
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
        </div>
    )
}

export default GrowthChart
