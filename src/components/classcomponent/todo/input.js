import React from "react";
import {v4 as uuidv4} from "uuid";
import { Form } from "react-bootstrap";
function Bones (input,setInput,todos,setTodos){
    const onChange=(event)=>{
        setInput(event.target.value);
    }
    const onformsubmit=(event)=>{
        event.preventdefault();
        setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
        setInput('');
    }
    return(
           <form onSubmit={onformsubmit}>
            <input type={"text"} placeholder="type todo list..." className="input" value={input} required onChange={oninput}/>
            <button className="btn" type="submit">Add</button>
           </form>
    )

    
}
export default Bones