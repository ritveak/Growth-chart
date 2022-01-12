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

const cdata = [
  {
    year: "2021",
    1: 10,
    2: 12,
  },
  {
    year: "2022",
    1: 11,
    2: 14,
  },
  // {
  //   year: "2023",
  //   1: 13,
  //   2: 16,
  // },
  // {
  //   year: "2024",
  //   1: 18,
  //   2: 20,
  // },
  // {
  //   year: "2025",
  //   1: 22,
  //   2: 26,
  // },
];


const GrowthChart = ({data,dataUpdater}) => {
  console.log(data);


const getData=()=>{
    var yearMap = new Map();
    for(var i =0;i<data.length;i++){
      for(var j=0;j<data[i].length;j++){
        var year = data[i][j].year;
        var sal = data[i][j].sal;
        if(yearMap.get(year)){
          var salArray = yearMap.get(year);
          salArray.push(sal);
          yearMap.set(year,salArray);

        }else{
          yearMap.set(year,[sal]);
        }
      }
    }

    var formattedData = [];
    yearMap.forEach((value,key)=>{
      var obj = {};
      obj["year"] = key;
      for(var i =0;i<value.length;i++){
        obj[i+1]=value[i];
      }
      formattedData.push(obj);
       
    });
    return formattedData;

}
  return (
        <div className="chartContainer">
          <div className="chart">
            <button onClick={getData} >Check states</button>
          <LineChart
      width={1000}
      height={300}
      data={getData()}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="1" stroke="#8884d8" activeDot={{ r: 8 }}/>
      <Line type="monotone" dataKey="2" stroke="#82ca9d" />
      <Line type="monotone" dataKey="3" stroke="#FF6676" />

    </LineChart>
          </div>
        </div>
    )
}

export default GrowthChart
