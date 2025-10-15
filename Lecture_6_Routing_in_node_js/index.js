import http from "http"

const server = http.createServer((req, res) => {
//     console.log(req.url) 
// res.end(`<h1>your request has been accepted</h1>`)

if (req.url === "/main") {
    res.end("<h1>hello this is the MAIN PAGE</h1>")
} else if (req.url === "/branch") {
    res.end("<h1>hello this is the BRANCH PAGE</h1>")
} else {
    res.end("INVALID URL")
}

}) 

const port = 2000;
server.listen(port, () => console.log(`server is running ${port}`))

