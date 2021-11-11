import "./form.css"
//import React from "react";
import React, { useState ,useEffect} from 'react';

function Form(){
    //var blockIndex = 1;
    var timeStamp;
    var [previousHash , setPreviousHash]= useState("bjhdb2321FWDF342SD1ssdf");
    var [blockIndex , setBlockIndex]= useState("");
    var [submited , setSubmitted] = useState(false);
    var [isMining , setIsMining ] = useState(false);
    const [data, setData] = useState("");

    var nonce;
    var diffucuilty = 4;

     function fetchLoadData(){
        if(submited == false){
            setIsMining(true);
            const requestOptions1 = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            };
            fetch('http://127.0.0.1:5000/getPreviousBlock', requestOptions1)
                .then(response => response.json(),err => console.log('TCL : err',err))
                .then((data)=>{ 
                    setPreviousHash(data.hash);
                    setBlockIndex(data.blockIndex);
                    setSubmitted(true);
                    setIsMining(false);
                //alert(data);
                });
        }

    }

    useEffect( () => {
        fetchLoadData();
           
      });
    
    
    function MineBlock(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body:  new URLSearchParams({
            'data': data,
        }) 
        };
        fetch('http://127.0.0.1:5000/mineblock', requestOptions)
            .then(response => response.json())
            .then(async (data)=>{ 
            console.log(data)
            setSubmitted(true);
            await fetchLoadData();
            });
    

    }

    if(isMining == false){
       return(<div className = "form-container" >
                                <form   id="new-block-mine"  onSubmit = {MineBlock}>

                                <div className = "form-heading">New Block</div>
                                <div className = "block-index">Index : {blockIndex}</div>
                                <div className = "previous-hash">Previous Block : <span><p>{previousHash}</p></span></div>
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
                </div>)
            


    }else{
        return(
            <div className = "form-container" >
                <h1>Mining </h1>
            </div>
            )
    }
    
}
export default Form