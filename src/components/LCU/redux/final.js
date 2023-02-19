import React from "react";
import { increment,decrement,selectcount } from "./reducers";
import { useDispatch,useslector } from "react-redux";
function counters(){
    const count=useDispatch(selectcount)
    const dispatch=useDispatch();

return (
    <>
    <p>{count}</p>
    <button onClick={()=>dispatch(increment()),decrement()}>kkkkkk</button>

    </>
)
}
export default counters