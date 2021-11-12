import "./block.css"
//import React from "react";
import React, { useState ,useEffect} from 'react';

function Block(props){


    var newline = String.fromCharCode(13, 10);
    return(
        <div className = "block-container">
            <div>
                <div className= "index">{props.blockData.index}</div>
                <div className= "previous-hash">previous block : {props.blockData.previous_hash}</div>
                <div className= "time">{props.blockData.timestamp.slice(0,25)}</div>
                <div className= "nonce">Nonce {props.blockData.nonce}</div>
                <div className= "data">Data</div>
                {/* <div className= "data-body">{props.blockData.data .replace(" ",newline)}</div> */}
                <div className= "data-body">{props.blockData.data}</div>
            </div>
        </div>
    )

}

export default Block;