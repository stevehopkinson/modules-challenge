// Import Node.js's core http module
const http = require('http')

// Set up generic HTTP headers
const headers = {
    'content-type' : 'text/html',
}

// Create server object
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, headers)
        res.end('Hello, world')
    } else {
        res.writeHead(404, headers)
        res.end('Resource not found')
    }
})

// Start server
server.listen(8080, console.log('Server listening on port 8080'))


// Tests

// Set up test variables
let requestOptions = {
    port: 8080,
    hostname: 'localhost',
    path: '',
};

let responsesRemaining = 0;


// Test that a request for the root returns a statusCode of 200
requestOptions.path = '/';
let requestHome = http.request(requestOptions)
requestHome.on('response', (res) => {
    responsesRemaining--
    if (res.statusCode === 200) {
        console.log('Passed: Request to the root returns a statusCode of 200')
    } else {
        throw("Failed: Request to the root didn't return a statusCode of 200")
    }

    if (responsesRemaining === 0)
        endTests()
})
requestHome.end()
responsesRemaining++


// Test that a request to /foo returns a statusCode of 404
requestOptions.path = '/foo';
let request404 = http.request(requestOptions)
request404.on('response', (res) => {
    responsesRemaining--
    if (res.statusCode === 404) {
        console.log('Passed: Request to non-existent endpoint returns a statusCode of 404')
    } else {
        throw("Failed: Request to non-existent endpoint didn't return a statusCode of 404")
    }

    if (responsesRemaining === 0)
        endTests()
})
request404.end()
responsesRemaining++


// If all responses return without errors, print a success message
const endTests = () => {
    console.log('All tests passed')
    process.exit()
}
