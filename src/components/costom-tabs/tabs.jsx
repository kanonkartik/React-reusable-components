import { useState } from "react"



export default function Tabs({tabsContent, onChange}){

    const [currentTabIndex , setCurrentTabIndex]=useState(0)

    function handleOnClick(getCurrentIndex){
          setCurrentTabIndex(getCurrentIndex)
          onChange(getCurrentIndex)
    }

    return (
       <div className="wrapper">
        <div className="heading">
             {
               tabsContent.map((tabItem,index)=>(
                <div className={`tab-item ${currentTabIndex===index ? 'active':''}`}>
                  <span  onClick={()=>handleOnClick(index)} key={tabItem.label}>
                    {tabItem.label}
                    </span>  
                </div>
               ))
             }
        </div>
        <div className="content" style={{color:'green'}}>
               {tabsContent[currentTabIndex]&&tabsContent[currentTabIndex].content}
        </div>

       </div>
    )
}