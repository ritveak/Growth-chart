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
            <p>{props.year}-{props.sal}LPA</p>
            <input value={props.sal} type='number' onChange={props.updateSalary}/>
            <button className='rowbtn' onClick={props.deleteRow}>Del</button>
            <p></p>
        </div>
    )
}

export default Row
