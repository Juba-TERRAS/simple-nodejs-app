let http = require('http');

let server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the IP address as the response
    res.end(`hello world`);
});

// Define the port to listen on
let PORT = 80;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
