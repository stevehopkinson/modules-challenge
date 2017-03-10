# Morning challenge: Modularise a simple Node.js server

This repository contains a simple Node.js server, with all of its code in a single file - `server.js`. If we want to be able to scale up our application, we'll want to separate each aspect of the server into its own file. Your challenge is to modularise the server into separate files, each of which performs a specific role.

1. Currently, the code that starts the server (`server.listen()`) is in the same file as the code that configures our server logic, which is bad for a few reasons – not least because it'll add a lot of pain when we want to separate out our tests. Move that line into a new file called `index.js`, and require in the server object from `server.js`.

2. All of the tests are in our main server file, too, which is far from ideal – we don't necessarily want to run our tests every time we start our server. Create a new JavaScript file that contains the tests and can be run independently of the main server – again, you'll have to require in the server object from `server.js`. 

3. The code that handles our requests (`res.writeHead` and `res.end`) is currently written directly into the function that creates the server. As our application logic gets more complex and we add more 'routes', that's going to make our code very difficult to maintain. Wrap the two blocks of handler code in their own functions and move them into their own module, called 'handlers.js'.

4. Depending on how you've completed the previous steps, the code that 'routes' requests by their URL will either be part of your main server file, or part of your handlers files. It's often a good idea for routing to happen in its own module, to keep it separate from our basic server setup and the logic in our handlers. Move the routing logic (the `if/else` statements that check `req.url`) into its own file, passing requests to the correct handler function. 

## Bonus task

Congratulations if you've got this far! As a bonus task, try to create an extra route for the server, with its own tests.

## Gotchas

1. Any module that uses functionality from Node's `http` module will need to require in the module at the top of the file. When moving code into modules, make sure that the `require` stays in the same file as the code that uses it – sometimes that can be more than one file.

2. You can only export *one variable* from each module, but that variable can be an object. If you want to move several related functions into a new module, add them as methods on a single object and export that object. 

3. You shouldn't be changing any of the *functionality* of the app – just moving the existing code into new files and updating variables names where necessary. If you find yourself
