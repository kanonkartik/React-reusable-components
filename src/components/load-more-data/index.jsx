import { useEffect, useState } from "react"
import './styles.css'



export default function LoadMoreData(){
    const [loading ,setLoading]=useState(false);
    const[products,setProduct]=useState([])
    const [count , setCount]=useState(0);
    const [disableButton, setDisableButton]=useState(false)

    async function fetchProducts(){
        try {

            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0? 0:count*20 }`)
            const result = await response.json()
            if(result && result.products && result.products.length){
                setProduct((prevData)=>[...prevData,...result.products]) //ddddd
            }
        } catch (e) {
            console.log(e)
        }finally{
            setLoading(false)
        }
    }

    

    useEffect(()=>{
        fetchProducts()
    },[count])

    useEffect(()=>{
        if(products && products.length === 100){
            setDisableButton(true)
        }
    },[products])

    if(loading){
        return <div>Loading data ! Please wait.</div>
    }


    return (
        <div className="container">
            <div>
                {products && products.length ? (
                    products.map(item => (
                        <div key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                ) : null}
                <button disabled={disableButton} className="button-container"  onClick={()=>setCount(count + 1)}>Load More Products</button>
                {
                    disableButton ? <p>You have reached to 100 products</p>:null
                }
            </div>
        </div>
    );
    
}