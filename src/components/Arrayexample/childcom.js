import React from "react";
function Child(props){
    return <div  key={ props.value.id}>
    <img  src={props.value.thumbnailUrl}/>
    <p  >{props.value.title}</p>
</div>
}
export default Child