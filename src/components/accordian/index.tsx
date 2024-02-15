
//single selection

import { useState } from "react"
import data from "./data"
import './styles.css'
//multiple selection
export default function Accordian(){
    const [selected, setSelected] = useState<number | null>(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState<boolean>(false);
    const [multiple, setMultiple] = useState<number[]>([]);

    function handelSingleSelection(getCurrentId){
       
          setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    
    function handleMultiSelection(getCurrentId){
         let cpyMultiple =[...multiple];
         const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
         console.log(findIndexOfCurrentId)
         if(findIndexOfCurrentId===-1)
        cpyMultiple.push(getCurrentId)
           else cpyMultiple.splice(findIndexOfCurrentId,1);
         setMultiple(cpyMultiple)
         console.log(selected,multiple)
    }
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}
            </button>
        <div className="accordian">
          {
            data && data.length > 0 ?
            data.map(dataItem=><div className="item">
                <div onClick={
                    enableMultiSelection
                    ? ()=>handelSingleSelection(dataItem.id)
                    : ()=>handleMultiSelection(dataItem.id)
                } className="title">
            
                <h3>{dataItem.question}</h3>
                <span>+</span>
                </div>
                {/* {
                    enableMultiSelection ? 
                    multiple.indexOf(dataItem.id)!== -1 &&
                    <div className="content">{dataItem.answer}</div>
                    : selected===dataItem.id && (<div className="contenty">{dataItem.answer}</div>)
                } */}
                
                {
                    selected === dataItem.id || multiple.indexOf(dataItem.id)!== -1? (<div className="contenty">{dataItem.answer}</div>):null
                
                }
            </div>)
           
            : <div>No data found !</div>
          }
        </div>
        </div>
    )
}