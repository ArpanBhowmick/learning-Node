import http from "http"

const server = http.createServer((req, res) => {
    res.end("server is running fine")
});

 const port = 2000

 server.listen(port, () => console.log(`serveris running on ${port}`))










