import express from "express";
import path from "path";

const app = express();

const products = [
  {
    title: "iphone - 15",
    price: "75K",
  },
  {
    title: "Oneplus - 12",
    price: "45K",
  },
  {
    title: "Google pixel",
    price: "55K",
  },
];



// send response

app.get("/", (req, res) => {

    // json response

    // res.json({message: 'fetched all products',
    //     products: products,
    //     success: true
    // })


    

    // HTML RESPONSE 

    // res.send("<h1> this is your  response</h1>")



    // HTML FILE RESPONSE 


    const dir = path.resolve()

    const url = path.join(dir, "./index.html")

    console.log("path of the file is  = ",url)

    res.sendFile(url)
});

const port = 2000;
app.listen(port, () => console.log(`-server is running on port ${port}`));
