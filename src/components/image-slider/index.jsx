import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,  BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'

export default function ImageSlider({url,limit}){
    const [images , setImages]= useState([]);
    const[currentSlide, setCurrentSlide]=useState(0);
    const[errormsg, setErrorMsg]=useState(null)
    const [loading, setLoading]=useState(false)


    async function fetchImages(getUrl,page){
        try {
            setLoading(true)
           const response= await fetch(`${getUrl}?page=${page}&limit=${limit}`);
           const data = await response.json();
           if(data){
            setImages(data)
            
           }
           
        } catch (e) {
            setErrorMsg(e.message)
           
        }finally{
            setLoading(false)
        }
    }

    function handlePrevious(){
       setCurrentSlide(currentSlide === 0? images.length-1: currentSlide-1)
    }

    function handleNext(){
      setCurrentSlide(currentSlide===  images.length-1 ? 0:currentSlide+1)
    }

    useEffect(()=>{
      if(url !=='')fetchImages(url)
    },[url])
console.log(images)

    if(loading){
        return<div>Loading data ! please wait</div>
    }if(errormsg !== null){
        return <div>error please -reTry {errormsg}</div>
    }

    return (
        <div className="container">
            <div>
                <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
                {images && images.length ? (
                    images.map((imageItem,index) => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide===index?'current-image':'current-image hide-current-image'}
                        />
                    ))
                ) : null}
                <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
                <span className="circle-indicators">
                    {images && images.length ? (
                        images.map((_, index) => (
                            <button key={index} className={
                                currentSlide===index?'current-indicator'
                                :"current-indicator inactive-indicator"
                            } onClick={()=>setCurrentSlide(index)} ></button>
                        ))
                    ) : null}
                </span>
            </div>
        </div>
    );
    
}