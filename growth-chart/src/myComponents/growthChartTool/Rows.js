import React,{useState} from 'react'
import Row from './Row';
import '../growthChartTool/Rows.css'
import GrowthChart from './GrowthChart';

const Rows = ({data, dataUpdater}) => {
    
    // const rdata = [{year:2020,sal:10, raise:20},{year:2021,sal:12,raise:10}];
    console.log(data);
    // console.log(chartData.chartData[0]);

    const [year,setYear] = useState();
    const [sal,setSal] = useState();
    const [raise,setRaise] = useState();
    const [toYear,setToYear] = useState();

    
    const updateSalary=(event,index,position)=>{
        var updatedRowsData =[...data];
        updatedRowsData[position][index].sal= parseInt(event.target.value);
        dataUpdater(updatedRowsData);
        console.log(event.target.value);
    }
    const updateRaise=(event,index,position)=>{
        var updatedRowsData =[...data];
        updatedRowsData[position][index].raise= parseInt(event.target.value);
        dataUpdater(updatedRowsData);
    }

    const deleteRow=(index,position)=>{
        let updatedRowsData = [...data];
        updatedRowsData[position].splice(index,1);
        dataUpdater(updatedRowsData);
    }

    const addRow=()=>{
        let updatedRowsData = [...data];
        
        var diff = toYear-year+1;
        var newElements =[];
        var lastYear= year-1;
        var lastSal =sal;
        var lastRaise=0;

        for(var i =0;i<diff;i++){
            var newRow = {};
            newRow.year = lastYear+1;
            newRow.sal = (lastSal*(1+(lastRaise/100))).toFixed(2);
            newRow.raise = raise;
            newElements.push(newRow);
            lastYear=newRow.year;
            lastSal=newRow.sal;
            lastRaise=newRow.raise;
        }


        if( !updatedRowsData[0]){
            updatedRowsData[0]= newElements;
        }
        else{
            updatedRowsData[0].push(...newElements)
        }
        dataUpdater(updatedRowsData);
        // setLastChanged(new Date()+"Added new row.")
        setTimeout(1000);
        console.log("-------------------");
        console.log(updatedRowsData[0]);
        console.log("-------------------");
    }

    return (
        <div>
            <div className='formGrp'>
            <input type='number' value={year} onChange={(event)=>setYear(event.target.value)} placeholder='Year'/>
            <input type='number' value={sal} onChange={(event)=>setSal(parseInt(event.target.value))} placeholder='Salary'/>
            <input type='number' value={raise} onChange={(event)=>setRaise(parseInt(event.target.value))} placeholder='Raise'/>
            <input type='number' value={toYear} onChange={(event)=>setToYear(parseInt(event.target.value))} placeholder='ToYear'/>

            <button className='btn' onClick={addRow}>Add</button>

            <GrowthChart  data={data} dataUpdater={dataUpdater}  />

            </div>
            {
                data.map((element,position) => 
                {
                    return(<>
                            {/* <button onClick={addRow(position)}>Add row in {position}</button> */}
                            <div className='rowDiv'>
                                <p>Position - {position}</p>
                                {
                                    element.map( (currElement,index)=>
                                    {
                                        return <Row key={index} 
                                        year={currElement.year} 
                                        sal ={currElement.sal}
                                        raise = {currElement.raise} 
                                        deleteRow ={()=>{deleteRow(index,position)}}
                                        updateSalary = {(event)=>{updateSalary(event,index,position)}}
                                        updateRaise = {(event)=>{updateRaise(event,index,position)}}
                                        />
                                    })
                                }
                            </div>
                        </>)
                
                })
            }

            
        </div>
    )
}

export default Rows
