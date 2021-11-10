import "./form.css"

function Form(){
    var blockIndex = 1;
    var timeStamp;
    var previousHash= "bjhdb2321FWDF342SD1ssdf";
    var nonce;
    var data;
    var diffucuilty = 4;

    return(
        <div className = "form-container">
            <form   id="new-block-mine" >

                <div className = "form-heading">New Block</div>
                <div className = "block-index">Index : {blockIndex}</div>
                <div className = "previous-hash">Previous Block : {previousHash}</div>
                <label for="data">Data : </label><br></br>
                <textarea name="message" rows="10" cols="30"></textarea><br></br>
                {/* <input type ="text" id="data" name="data"></input> */}
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
export default Form