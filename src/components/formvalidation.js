import React, { useState } from "react";
import pic1 from '../components/coco.jpg';
function Form1() {
    
    const [username, setname] = useState('')
    const  [password, setpassword] = useState('')
    const [nameerror, setnameerror] = useState(false)
    const [passworderror, setpassworderror] = useState(false)
    function validdata() {
        if (username.trim().length === 0) {
            setnameerror(true)
        }
        else {
            setnameerror(false)
        }
        if (password.trim().length === 0) {
            setpassworderror(true)

        }
        else {
            setpassworderror(false)
        }
    }
    return (
        <>
        <img style={{width:"250px"}} src={pic1} alt=""/>
            <p>username</p>
            <input type='text'
                value={username}
                onChange={(e) => setname(e.target.value)} />
            {nameerror && <small>please Enter name !!!</small>}
            <br></br>
            <p>password</p>
            <input type='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)} />
                {passworderror && <small>please enter password !!!</small>} 
            <br></br>
            <button onClick={validdata}>login</button>
            
        </>
    )

}
export default Form1