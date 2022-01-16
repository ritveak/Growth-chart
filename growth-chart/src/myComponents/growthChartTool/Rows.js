import React,{useState} from 'react'
import Row from './Row';
import '../growthChartTool/Rows.css'
import GrowthChart from './GrowthChart';

const Rows = ({data, dataUpdater}) => {
    
    // const rdata = [{year:2020,sal:10, raise:20},{year:2021,sal:12,raise:10}];
    // console.log(chartData.chartData[0]);

    const [year,setYear] = useState();
    const [sal,setSal] = useState();
    const [raise,setRaise] = useState();
    const [toYear,setToYear] = useState();
    
    const updateSalary=(event,index,position)=>{
        var updatedRowsData =[...data];
        updatedRowsData[position][index].sal= parseFloat(event.target.value);
        reCalculate(updatedRowsData,index,position);

        dataUpdater(updatedRowsData);
        console.log(event.target.value);
    }
    const updateRaise=(event,index,position)=>{
        var updatedRowsData =[...data];
        updatedRowsData[position][index].raise= parseFloat(event.target.value);
        // for(var i= index+1;i<updatedRowsData[position].length;i++){
        //     var lastSalary = updatedRowsData[position][i-1].sal;
        //     console.log("last salary = "+lastSalary);
        //     updatedRowsData[position][i].sal=getSalaryBasedOnRaise(lastSalary,raise);
        //     raise = updatedRowsData[position][i].sal;
        // }
        reCalculate(updatedRowsData,index,position);
        dataUpdater(updatedRowsData);
    }

    function reCalculate(array,index, position){
        var raise = array[position][index].raise;

        for(var i= index+1;i<array[position].length;i++){
            var lastSalary = array[position][i-1].sal;
            
            array[position][i].sal=getSalaryBasedOnRaise(lastSalary,raise);
            console.log("updated salary for " +i +" = "+ array[position][i].sal);
            raise = array[position][i].raise;
        }

    }
    const deleteRow=(position)=>{
        console.log("deletingggg"+position);
        let updatedRowsData = [...data];
        updatedRowsData.splice(position,1);
        if(updatedRowsData.length===0){
            updatedRowsData[0]=[];
        }
        console.log(updatedRowsData);
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
            newRow.sal = getSalaryBasedOnRaise(lastSal,lastRaise);
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
        // console.log("-------------------");
        // console.log(updatedRowsData[0]);
        // console.log("-------------------");
    }

    function getSalaryBasedOnRaise(lastSalary,raise){
        console.log("lastSalary = "+lastSalary+", raise = "+raise);
        return (lastSalary*(1+(raise/100))).toFixed(2);
    }

    return (
        <div className='chartDiv'>
            <div className='formGrp'>
                { 
                    data[0] && !data[0][0] ? 
                    <div>
                        <input type='number' value={year} onChange={(event)=>setYear(event.target.value)} placeholder='Year'/>
                        <input type='number' value={sal} onChange={(event)=>setSal(parseFloat(event.target.value))} placeholder='Salary'/>
                        <input type='number' value={raise} onChange={(event)=>setRaise(parseFloat(event.target.value))} placeholder='Raise'/>
                        <input type='number' value={toYear} onChange={(event)=>setToYear(parseFloat(event.target.value))} placeholder='ToYear'/>

                        <button className='btn' onClick={addRow}>Add</button>
                    </div> :          
                    <GrowthChart  data={data} dataUpdater={dataUpdater}  />
                }
            </div>
            {
                data.map((element,position) => 
                {   if(element[0] !=null)
                    {return(<>
                            {/* <button onClick={addRow(position)}>Add row in {position}</button> */}
                            <div className='dataGridContainer'>
                            <div className='rowDiv'>
                            <div className='labels'>
                                                <span className='gridCell'>Salary</span>
                                                <span className='gridCell'>Raise</span>
                                            </div>
                                            <div className='dataRow'>
                                {
                                    element.map( (currElement,index)=>
                                    {
                                        return<Row key={index} 
                                            year={currElement.year} 
                                            sal ={currElement.sal}
                                            raise = {currElement.raise} 
                                            updateSalary = {(event)=>{updateSalary(event,index,position)}}
                                            updateRaise = {(event)=>{updateRaise(event,index,position)}}/>
                                            
                                    })
                                }
                                </div>
                            <button className='rowbtn' onClick={()=>deleteRow(position)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg></button>
                            </div>
                            </div>
                            <button className='btn' onClick={addRow}>Add Position</button>
                        </>)}
                        else{
                            return(<></>)
                        }
                
                })
            }

            
        </div>
    )
}

export default Rows
