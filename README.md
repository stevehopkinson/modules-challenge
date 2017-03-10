# Morning challenge: Modularise a simple Node.js server

This repository contains a simple Node.js server

1. Currently, the code that starts the server (`server.listen()`) is in the same file as the code that configures our server logic, which is bad for a few reasons – not least because it'll add a lot of pain when we want to separate out our tests. Move that line into a new file called `index.js`, and require in the server object from `server.js`.

2. All of the tests are in our main server file, too, which is far from ideal – we don't necessarily want to run our tests every time we start our server. Create a new JavaScript file that contains the tests and can be run independently of the main server – again, you'll have to require in the server object from `server.js`.

Don't get caught up on the technicalities of how the tests work 

## Gotchas
