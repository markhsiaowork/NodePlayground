const http = require('http')

const server = http.createServer((req, res)=>{
    
    if (req.url === '/') {
        res.end('Home page')
    }
    else if (req.url === '/About') {
        
        res.end('About page')
    }
    res.end(`
        <h1>Oopsy 404 NOT FOUND</h1>
        <a href="/">Home</a>
    `)
});

server.listen(5000)