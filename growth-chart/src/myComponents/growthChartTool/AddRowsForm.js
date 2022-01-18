import React,{useState} from 'react'

const AddRowsForm = (props) => {

    const [year,setYear] = useState('');
    const [sal,setSal] = useState('');
    const [raise,setRaise] = useState('');
    const [toYear,setToYear] = useState('');

    const addRow=()=>{
        console.log("position"+props.position);
        console.log(props.data);
        let updatedRowsData = [...props.data];
        var diff = toYear-year+1;
        var newElements =[];
        var lastYear= year-1;
        var lastSal =sal;
        var lastRaise=0;

        for(var i =0;i<diff;i++){
            var newRow = {};
            newRow.year = lastYear+1;
            newRow.sal = getSalaryBasedOnRaise(lastSal,lastRaise);
            newRow.raise = raise;
            newElements.push(newRow);
            lastYear=newRow.year;
            lastSal=newRow.sal;
            lastRaise=newRow.raise;
        }


        if( !updatedRowsData[props.position]){
            updatedRowsData[props.position]= newElements;
        }
        else{
            updatedRowsData[props.position].push(...newElements)
        }
        props.dataUpdater(updatedRowsData);
        // setLastChanged(new Date()+"Added new row.")
        setTimeout(1000);
        // console.log("-------------------");
        // console.log(updatedRowsData[0]);
        // console.log("-------------------");
        props.setShowAddPosition(true);
    }

    function getSalaryBasedOnRaise(lastSalary,raise){
        console.log("lastSalary = "+lastSalary+", raise = "+raise);
        return (lastSalary*(1+(raise/100))).toFixed(2);
    }

    return (
        <div>
            <input type='number' value={year} onChange={(event)=>setYear(event.target.value)} placeholder='Year'/>
            <input type='number' value={sal} onChange={(event)=>setSal(parseFloat(event.target.value))} placeholder='Salary'/>
            <input type='number' value={raise} onChange={(event)=>setRaise(parseFloat(event.target.value))} placeholder='Raise'/>
            <input type='number' value={toYear} onChange={(event)=>setToYear(parseFloat(event.target.value))} placeholder='ToYear'/>

            <button className='btn' onClick={addRow}>Add</button>
        </div>
    )
}

export default AddRowsForm
