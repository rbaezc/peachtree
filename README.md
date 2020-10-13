# Front End Assignment: Make A Transaction
To run this application you need to follow the next steps:

A) run the following command to install al packages and dependencies
    1.- npm install

B) you need to clone also api repository that is in this url:
    https://github.com/rbaezc/peachtreeapi.git,

    to clone it using git command line, follow the next steps:
        1.- git clone https://github.com/rbaezc/peachtreeapi.git

    now you need to install mongo community server:
    https://www.mongodb.com/try/download/community?tck=docs_server

    follow installation process, when it promts to ask if you want to 
    install for you mongo compass, accept it. (compass is the gui)

    then open your compass db and connect to the server, to do it
    follow this instructions:
        1.- click on new connection
        2.- click on fill in connection fields individually
        3.- set hostname as localhost, port as 27017 and then click 
        in the connect button.
    

    Now create the database:
        1.- click on the create database button
        2.- name it: peachtree
        3.- it will ask for a document, name it: transactions

    Now go to your api (you can use command line or visual studio code to run 
    commands from its terminal), run the next command:
        -- node server.js

    Now you will have the api up and running.

C) Run the react js application using the command: npm start
    the application will ask to run in other port as node/express api
    will run on port 3000, the just say yes, and the react application will
    run on port 3001
