import "./block.css"
//import React from "react";
import React, { useState ,useEffect} from 'react';

function Block(props){



    return(
        <div className = "block-container">
            <div>
                <div>index : {props.blockData.index}</div>
                <div>previous hash : {props.blockData.previous_hash}</div>
                <div>Time : {props.blockData.timestamp}</div>
                <div>Nonce : {props.blockData.nonce}</div>
                <div>Data : {props.blockData.data}</div>
            </div>
        </div>
    )

}

export default Block;