const http = require("http");
const data = require("./data");

http.createServer((req,res)=>{
    res.writeHead(200, {});
    res.write(JSON.stringify({data}));
    res.end();
}).listen(4000)
console.log("server created successfully");
