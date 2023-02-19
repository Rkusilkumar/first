import React, { useState } from "react";
function Stateexample() {
    let [data,setdata]=useState(0);
    function click(){
        setdata(data+1)
    }
    function ntg(){
        setdata(data-1)
    }
    function rss(){
        setdata(data=0)
    }
    

   return(
    <>
      <p style={{color:'red'}}>{data}</p>
      <button onClick={click}> increment</button>
      <button onClick={ntg}>decrement</button>
      <button onClick={rss}>reset</button>
    </>
   )
}
export default Stateexample