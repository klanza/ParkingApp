# Park Place

Park Place is a web application designed to solve the complex problem of parking and urban congestion. Park Place is a crowd sourced solution to parking in metropolitan areas, initially designed for a target market at the University in Tucson, Arizona. By allowing users to rent out their private parking spots we hope to solve the problem of underutilized parking infrastructure, while simultaneously generating passive income for users. Ideal for those who are visiting downtown areas, universities, sporting events, or may even be looking for a long term parking solution, Park Place is here to serve your needs!

## Getting Started

In order to get this program running on a local system for development or testing, you will need to follow several steps. If you would like to view an already working model, the application is hosted at https://parkez.herokuapp.com/

* Clone the repository and run the schema.sql file located in the 'db' folder. This will set up the initial database necessary for the SQL tables. You will need a SQL command line or program to do this such as SQLPro or MySQL.
* Make sure to change the 'config.json' inside the 'config' folder to the information corresponding to your local SQL database.
* Execute the 'npm install' command when inside the cloned repository in order to install the necessary node packages.
* Run the server.js file to allow the sequelize ORM to setup the tables and their relations.
	* Alternatively you can run "$ node_modules/.bin/sequelize db:migrate" to establish the necessary models.
* Run the command "$ node_modules/.bin/sequelize db:seed:all" in order to run the datbase seeds
	* Use the command "heroku run sequelize db:seed:all --env production --app 'HEROKU-APP-NAME' to deploy the seeds for the database to the heroku server.
* Navigate to the directory for the cloned repository and run the command "node server.js"
* Navigate to the hosted location (defaulted to localhost:8000) and try it out!

### Prerequisites

```
SQL
	Application runs on a SQL database
Terminal
	Terminal software to run server and install packages
Node.js
	Running server architecture and logic relies on Node and Node Package Manager (NPM)
```
## Running the tests

* Application testing uses functional tests for opening instances of the website, testing various routes and site functionality
* First install Node.js and run the package install.
* Then navigate to the directory and use the command 'mocha' to automaticall run all tests.
	* Nightmare uses the Electron browser to open several instances of the site, running them to completion.

## Deployment

Deployment was accomplished using Heroku and the JawsDB addon. This combination allowed for a complete application with server and routing architecture, as well as a hosted database to be created. Database management using SQL interfaces such as MySQL allowed for easy database migration and seeding. For personal deployment, Sequelize commands with db:migrate and db:seed:all and their accompanying seed and migration files will fully populate the SQL schema located in the "db" folder.

## Built With

```
Development
```
* [Express](https://expressjs.com) - Web application and server structure framework.
* [Heroku](https://www.heroku.com/) - Server and database hosting for running application.
* [MySQL](https://www.mysql.com/) - Server software, create and manage database.
* [Node.js](https://nodejs.org/en/) - Command line interface and data manipulation.
* [Node.js](https://nodejs.org/en/) - Command line interface and data manipulation.
* [Nodemailer](https://nodemailer.com/) - Node application for automatic emailing
* [Sequelize](docs.sequelizejs.com/) - Object Relational Mapping package for managing SQL Database.
```
Testing
```
* [Chai](http://www.chaijs.com/) - Assertion library for automated testing.
* [Mocha](https://mochajs.org/) - Asynchronous testing framework built on Node.js.
* [Nightmare](http://www.nightmarejs.org/) - Browser automation library used for functional testing.
```
Linter
```
* [ESLint](https://eslint.org/) - Coding linter applied to project to keep consistent code styling
  
## Contributing

## Authors

* **Anindya Gupta** - *Full Stack Developer* - [anindya1234](https://github.com/anindya1234)
* **Christopher Clark** - *Back-end Developer* - [christopheryc94](https://github.com/christopheryc94)
* **Darwood Martin** - *Full Stack Developer* - [ddmartin3](https://github.com/ddmartin3)
* **Luke Stewart** - *Front-end Developer* - [linkadinkadoo](https://github.com/linkadinkadoo)
* **Kenneth Lanza** - *Full Stack Developer/Team Lead* - [klanza](https://github.com/klanza)


## License


## Acknowledgments

* Thanks to our instruction team, Jan Jorgensen, Nicholas Green, Peter Fesz-Nguyen, and Joel Molina.
* Thanks to The Coding Bootcamp for the support and education.
