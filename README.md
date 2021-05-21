# The-Web
# Online chatting box

This is based on nodejs online and offline a "online chatting box".

### MongoDB

Go to the app.js file to modify
line 8:

    var mongoUrl = "mongodb://Your MongoDB Address/";

### Run
    Execute the back end in this instant
    node app.js

> Wait a moment and the deployed address will appear

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
