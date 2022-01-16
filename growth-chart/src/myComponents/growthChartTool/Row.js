import React from 'react'
import '../growthChartTool/Row.css'
    // const updateSalary=(event,index)=>{
    //     let updatedRowsData = rowsData;
    //     updatedRowsData.rowsData[index].sal= event.target.value;
    //     console.log(updatedRowsData.rowsData)
    //     setRowsData(updatedRowsData);
    // }
const Row = (props) => {
    return (
        <div>
        <div className='yearRow'>
            <div className='grpBox'>{props.year}</div>
            <div className='row'>
            <div className='grpBox'>
            <input className='inputCell' value={props.sal} type='number' onChange={props.updateSalary}/>
            <input className='inputCell' value={props.raise} type='number' onChange={props.updateRaise}/>
            </div>
            <p></p>
            </div>
        </div>
        </div>
    )
}

export default Row
