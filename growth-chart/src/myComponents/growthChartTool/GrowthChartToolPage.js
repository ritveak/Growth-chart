import React from 'react'
import Banner from '../common/Banner';
import GrowthChart from './GrowthChart';
import chartData from './ChartData';

// const [data,setMenu] = useState(chartData);

const bannerData =
    {
      title: "Salary Forecast",
      subTitle: "Please fill your past & current earnings, and year information below and see the potential changes about your income raise over the upcoming years.",
      image: "../images/illustration2.png",
      btnText: "Predict my salary",
      btnSideText:"",
    };

const GrowthChartToolPage = () => {
    return (
        <div>
            <Banner data={bannerData} />
            <div>Growth Banner</div>
            <div>Growth calculator Fields</div>
            <GrowthChart chartData={chartData} />
        </div>
    )
}

export default GrowthChartToolPage
