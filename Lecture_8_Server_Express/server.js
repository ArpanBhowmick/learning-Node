import express from "express"

const app = express();

app.get("/", (req,res) => {
    res.send("You are requested for home route")
})

app.get("/srk", (req, res) => { 
    res.send("Here is some information about SRK")
})

const port = 2000;
app.listen(port, ()=> {console.log(`serer is running on port ${port}`)})











