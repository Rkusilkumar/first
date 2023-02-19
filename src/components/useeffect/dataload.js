import React, { useEffect, useState } from "react";
import axios from "axios";
function Dataload(){
    const [loading,setloading]=useState(true);
    const[data,setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/")
        .then((res)=>{
            setdata(res.data);
            setloading(false);
            
        })
        .catch(()=>{
            console.log(err);
        })
    },[])
    useEffect(()=>{
        console.log("nehru")

    } ,[loading])
    return(
        <>
        {
           loading && <p>Loading....</p> 
        }
        {
            data.length > 0 && data.map((ele)=>{
                return <>
                <img src={ele.thumbnailUrl}/>
                </>
            })
        }
        </>
    )
    
}
export default Dataload
    

    
