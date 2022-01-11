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
            <p>{props.year}-{props.sal}LPA-{props.raise}Raise</p>
            <span>salary</span><input value={props.sal} type='number' onChange={props.updateSalary}/>
            <span>Raise</span><input value={props.raise} type='number' onChange={props.updateRaise}/>
            <button className='rowbtn' onClick={props.deleteRow}>Del</button>
            <p></p>
        </div>
    )
}

export default Row
