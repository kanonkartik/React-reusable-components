import { useState } from "react"
import Modal from "./model"
import './model.css'



export default function ModalTest(){
    const [showmodalPoupup,setShowmodalPoupup]=useState(false)

           function handleToggleModalPopup(){
            setShowmodalPoupup(!showmodalPoupup)
           }

           function onClose(){
            setShowmodalPoupup(false)
           }

    return(
        <div>
           <button onClick={handleToggleModalPopup} style={{backgroundColor:'black',color:"white",padding:10}}>Open Model PoPuP</button>
           {
            showmodalPoupup && <Modal onClose={onClose}
            header={<h1>Customized Header</h1>}
            body={<h2>Costomized Body</h2>}
            footer={<h3>Costomized footer</h3>}
            />
           }
        </div>
    )
}