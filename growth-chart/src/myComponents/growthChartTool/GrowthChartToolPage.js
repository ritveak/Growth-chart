import React from 'react'
import Banner from '../common/Banner';
import GrowthChart from './GrowthChart';
import chartData from './ChartData';
import Rows from './Rows';
import '../growthChartTool/GrowthChartToolPage.css'
// const [data,setMenu] = useState(chartData);

const GrowthChartToolPage = () => {

const bannerData =
    {
      title: "Salary Forecast",
      subTitle: "Please fill your past & current earnings, and year information below and see the potential changes about your income raise over the upcoming years.",
      image: "../images/illustration2.png",
      btnText: "Predict my salary",
      btnSideText:"",
    };

    return (
        <div className='growthFormContainer'>
            <Banner data={bannerData} />
            <div className='growthFormTitle'>Growth Banner</div>
            <div className='growthFormsubTitle'>Growth calculator Fields</div>
            <Rows chartData={chartData} />
            <GrowthChart chartData={chartData}  />
            
        </div>
    )
}

export default GrowthChartToolPage
