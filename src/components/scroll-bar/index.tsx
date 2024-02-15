import { useEffect, useState } from "react"
import './styles.css'



export default function Scrollbar({url}){
    const[data , setData]=useState([])
    const [loading, setLoading]=useState(false)
    const[errorMessage , setErrorMessage]=useState('')
    const [scrollPercentage, setScrollPercentage]=useState(0)

    async function fetchingData(getUrl) {
        try {
            setLoading(true)
            const response= await fetch(getUrl)
        const data = await response.json()
       
          if(data && data.products && data.products.length >0){
            setData(data.products)
            setLoading(false)
          }
            
        } catch (error) {
            console.error(error)
            setErrorMessage('someting went wrongg')
            setLoading(false)
        }
        
    }

 useEffect(()=>{
    fetchingData(url)
 },[url])

 function handelScrollPercentage(){
    console.log(document.body.scrollTop,
        document.documentElement.scrollTop, 
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight);


const howMouchScrolled=document.body.scrollTop || document.documentElement.scrollTop;
 const height= document.documentElement.scrollHeight - document.documentElement.clientHeight

 setScrollPercentage((howMouchScrolled/height)*100)
 }


 
 

console.log(scrollPercentage)

 useEffect(()=>{
    window.addEventListener('scroll',handelScrollPercentage)

    return ()=>{
        window.removeEventListener('scroll',()=>{})
    }
 })

 if(loading){
    return <div>Loading data ! Please wait</div>
 }

 if(errorMessage){
    return <div>Error ! {errorMessage}</div>
 }
   
    return (
        <div>
        <div className="top-container">
          <h1 className="header-title">Custom Scroll Indicator</h1>
          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="data-container">
          {data && data.length > 0
            ? data.map((dataItem, index) => (
                <p key={index} className="data-product">
                  {dataItem.title}
                </p>
              ))
            : null}
        </div>
      </div>
    )
}