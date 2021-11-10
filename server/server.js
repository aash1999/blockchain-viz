//const bodyParser = require("body-parser");
const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


var blockchainFile = require("./blockchain.js")
var blockchain = new blockchainFile.Blockchain();



app.get("/mineblock", (req,res)=>{

    var previous_block =  blockchain.chain.slice(-1)[0];
    var previous_hash =  blockchain.hash(previous_block)
    var data  = req.body.data;
    console.log(req.body.data)
    var date =new Date();
    date = date.toString();
    var block  = {
      index : blockchain.chain.length +1,
      timestamp : date,
      nonce : 1,
      previous_hash : previous_hash,
      data : data
    }
    block.nonce  = blockchain.proof_of_work(block);
    blockchain.create_block(block.previous_hash  , block.nonce , block.index  , block.data ,block.timestamp );
    res.send(blockchain.chain);


})