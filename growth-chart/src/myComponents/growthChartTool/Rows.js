import React,{useState} from 'react'
import Row from './Row';
import '../growthChartTool/Rows.css'

const Rows = (chartData) => {
    const rdata = [{year:2020,sal:10, raise:20},{year:2021,sal:12,raise:10}];
    const [rowsData,setRowsData] = useState(rdata);
    const [lastChanged,setLastChanged] = useState('');
    const [year,setYear] = useState();
    const [sal,setSal] = useState();
    const [raise,setRaise] = useState();

    const updateSalary=(event,index)=>{
        var updatedRowsData = new Object();
        updatedRowsData =  rowsData;
        updatedRowsData[index].sal= parseInt(event.target.value);
        setRowsData(updatedRowsData);
        setLastChanged(event.target.value)
        console.log(new Date()+"Updated row - "+rowsData)
        console.log(lastChanged)

    }

    const deleteRow=(index)=>{
        let updatedRowsData = rowsData;
        updatedRowsData.splice(index,1);
        setRowsData(updatedRowsData);
        setLastChanged(new Date()+"Deleted row.")
        console.log(rowsData)
    }

    const addRow=()=>{
        let updatedRowsData = rowsData;
        var newRow = {};
        newRow.year = year;
        newRow.sal = sal;
        newRow.raise = raise;
        updatedRowsData.push(newRow)
        setRowsData(updatedRowsData);
        setLastChanged(new Date()+"Added new row.")
        console.log(rowsData)
    }

    return (
        <div>
            <div className='formGrp'>
            <input type='number' value={year} onChange={(event)=>setYear(parseInt(event.target.value))} placeholder='Year'/>
            <input type='number' value={sal} onChange={(event)=>setSal(parseInt(event.target.value))} placeholder='Salary'/>
            <input type='number' value={raise} onChange={(event)=>setRaise(parseInt(event.target.value))} placeholder='Raise'/>
            <button className='btn' onClick={addRow}>Add</button>
            </div>
            {rowsData.map( (currElement,index)=>{
                return <Row key={index} 
                year={currElement.year} 
                sal ={currElement.sal} 
                deleteRow ={()=>{deleteRow(index)}}
                updateSalary = {(event)=>{updateSalary(event,index)}}
                />     
            } )}

            
        </div>
    )
}

export default Rows
