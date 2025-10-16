import express from "express"


const app = express();

app.get("kj", (req,res)=>{
    res.send("this is a response")
})

app.post("Post", (req,res)=>{
    res.send("this is a response")
})


const port = 2000
app.listen(port , () => console.log(`server is running on port${port}`))




