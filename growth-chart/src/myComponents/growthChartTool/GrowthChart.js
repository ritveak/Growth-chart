import "./GrowthChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const data = [
  {
    name: "2021",
    uv: 10,
    pv: 12,
    amt: 5
  },
  {
    name: "2022",
    uv: 11,
    pv: 14,
    amt: 6
  },
  {
    name: "2023",
    uv: 13,
    pv: 16,
    amt: 8
  },
  {
    name: "2024",
    uv: 18,
    pv: 20,
    amt: 15
  },
  {
    name: "2025",
    uv: 22,
    pv: 26,
    amt: 20
  },
];
const GrowthChart = ({chartData}) => {
    return (
        <div className="chartContainer">
          <div className="chart">
          <LineChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }}/>
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <Line type="monotone" dataKey="amt" stroke="#82ca9d" />

    </LineChart>
          </div>
        </div>
    )
}

export default GrowthChart
