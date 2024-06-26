import React ,{useState} from 'react'
import Banner from '../common/Banner';
import Rows from './Rows';
import '../growthChartTool/GrowthChartToolPage.css'

const GrowthChartToolPage = () => {

    const [rowsData,setRowsData] = useState([]);

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
            <Rows data={rowsData} dataUpdater={setRowsData} />
        </div>
    )
}

export default GrowthChartToolPage
