# The-Web
# Online chatting box

This is based on nodejs online and offline a "online chatting box".

### MongoDB

Go to the app.js file to modify
line 8:

    var mongoUrl = "mongodb://Your MongoDB Address/";

### Purpose

complete assignment

### Struct

**app.js**      

​	cors              			 app.all

​    swaggerdoc         	app.use(‘doc’)

**bin/www**       

​	api port          	  	var port = normalizePort(process.env.PORT || '3000');

​    use socket.io       	io.require init

**socker.io/socket.io.js** 

​	socket.io config 		connection, chat, chatback, disconnect

**databases/database.js**

​    mongodb config      mongodb url

**models/\*.js**

​    db config       			schema, model

**public/swag/swag.json**

​    swagger doc          	api info

**routes/index.js**

​    main api          			router.get/post(...

### Dependence

    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "express-swagger-generator": "^1.1.17",
    "gm": "^1.23.1",
    "http-errors": "~1.6.3",
    "images": "^3.2.3",
    "jimp": "^0.16.1",
    "mongoose": "^5.12.5",
    "morgan": "~1.9.1",
    "pug": "2.0.0-beta11",
    "socket.io": "^4.0.1",
    "swagger-ui-express": "^4.1.6"

### Run
    Execute the back end in this instant
    node app.js

> Wait a moment and the deployed address will appear

### Software

vscode: edit, run, remote ssh

zsh: make linux easier

xftp: remote file transfer

### Open

Server listening on port: http://localhost:3000

### Docs

Api docs: http://localhost:3000/docs

For this procedure is the use of the native front-end design method, the use of the language is HTML+ CSS +JavaScript DOM technology。
We use HTML to construct the program ontology, CSS to construct the style page, and JavaScript to execute the data ontology

  $.ajax({
        async : false,    
        type : "post",    
        url : "/getDepts",
        dataType : "json",
        success: function (data) {
          console.log(data);  
        },
        error:function (data) {
            alert(data.result);
        }
    });


AJAX front-end data interactive parsing
