# angular-library-example
Library sample application build wit AngularJs 1.6 , Nodejs and mongodb

Running the app.

**Client**

Install dependencies
<br>
`npm install`

Running the client: 
`gulp`

**Server**

Install dependencies
<br>
`npm install`

Running the server
<br>
start mongo: 
`mongod`


Seeding the database.
Under server folder run this commands

`mongoimport --db library-dev --collection books --drop --file ./data/books.json`
<br>
`mongoimport --db library-dev --collection library --drop --file ./data/library.json`

start express 
`npm start`
