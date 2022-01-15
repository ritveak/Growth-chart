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
            <button className='rowbtn' onClick={props.deleteRow}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg></button>
            <p></p>
            </div>
        </div>
        </div>
    )
}

export default Row
