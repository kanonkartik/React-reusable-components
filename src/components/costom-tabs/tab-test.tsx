import Tabs from './tabs'
import './tabs.css'
import QRgenrator from '../qr-code-gen'

export default function TabTest(){

    
    const tabs=[
        {
           label:'Tab 1',
           content:<div> <h1>From the tab 1 displaying content</h1></div>
        },
        {
            label:'Tab 2',
            content:<div><h1>From the tab 2 displaying content</h1></div>
         },
         {
            label:'Tab 3',
            content:<div><h1>From the tab 3 displaying content</h1></div>
         },
         {
            label:'Tab 4',
            content:  <div style={{display:'grid'}}> <QRgenrator /></div> 
         }
    ]

    function handelChange(currentTabIndex){
        console.log(currentTabIndex)
    }


    return <Tabs tabsContent={tabs} onChange={handelChange}/>
}