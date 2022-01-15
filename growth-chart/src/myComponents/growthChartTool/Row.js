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
            {/* <p>States - {props.year}-{props.sal}LPA-{props.raise}Raise</p> */}
            <div className='row'>
            <div className='grpBox'>
            <span className='gridCell'>Salary</span><input className='inputCell' value={props.sal} type='number' onChange={props.updateSalary}/>
            </div>
            <div className='grpBox'>
            <span className='gridCell'>Raise</span><input className='inputCell' value={props.raise} type='number' onChange={props.updateRaise}/>
            </div>
            <p></p>
            </div>
        </div>
        </div>
    )
}

export default Row
