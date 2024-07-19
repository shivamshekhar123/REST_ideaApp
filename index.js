/**
 * Start the server
 */

const express = require("express")

const app = express()   //cause express is a type of function

/* STITCHING  SERVER WITH ROUTE */
require("./routes/idea.routes")(app)    //bcz its a function so we pass the app to the routers to execute it


app.listen(2020,(req,res)=>{
    console.log("server got started at port no.",2020)
})