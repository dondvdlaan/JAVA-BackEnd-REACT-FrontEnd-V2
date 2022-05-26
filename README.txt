JAVA BackEnd React FrontEnd Application

In this application we use Java Spring Boot as our back-end and REACT as our front-end. In the back-end we are also
using MYSQL to store a simple 1 table database. All the CRUD commands can be found in the SpringServer.java file.
Communication between the front-end and the back-end is by way of JSON.

Java Spring Boot files are saved under the java directory, REACT can be found under the ui directory.

In REACT Context and useReducer are used for a selection page of products.

Make sure that the names of the attributes (eg productDetails, id, etc) are the same on both sides for proper data
exchange.

Summary

Back-End:
- Java, Spring Boot and MYSQL database
- Port 8080 localhost Java, Spring Boot
- Port 3306 localhost MYSQL database

Front-End:
- REACT and Bootstrap
- Port 3000 localhost

OS:
- Ubuntu 22.04

Running:
- MYSQL create database 'product' (hybernate later will create the table automatically)
- Load Java, Spring Boot folder in IDE (Intellj for example) and run
- npm install and npm start for the REACT front-end
