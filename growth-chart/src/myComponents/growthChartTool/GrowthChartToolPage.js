import React from 'react'
import Banner from '../common/Banner';

const data =
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
            <Banner data={data} />
            <div>Growth Banner</div>
            <div>Growth calculator</div>
        </div>
    )
}

export default GrowthChartToolPage
