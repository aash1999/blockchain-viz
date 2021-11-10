import "./form.css"
//import React from "react";
import React, { useState } from 'react';

function Form(){
    var blockIndex = 1;
    var timeStamp;
    var previousHash= "bjhdb2321FWDF342SD1ssdf";
    var nonce;
    //var data;
    var diffucuilty = 4;

    const [data, setData] = useState("");
    function MineBlock(){
        //alert("hi")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body:  new URLSearchParams({
            'data': data,
        }) 
        };
        fetch('http://127.0.0.1:5000/mineblock', requestOptions)
            .then(response => response.json())
            .then((data)=>{ 
            //alert("hi")
            console.log(data)
            //setCount(count + 1);
            });
    

    }

    return(
        <div className = "form-container">
            <form   id="new-block-mine"  onSubmit = {MineBlock}>

                <div className = "form-heading">New Block</div>
                <div className = "block-index">Index : {blockIndex}</div>
                <div className = "previous-hash">Previous Block : {previousHash}</div>
                <label for="data">Data : </label><br></br>
                <textarea 
                        name="message" 
                        rows="10" 
                        cols="30"
                        value = {data}
                        onChange = {(e)=>setData(e.target.value)}
                ></textarea><br></br>
                <button type="submit" >Submit</button>

            </form>

        </div>
    )
}
export default Form