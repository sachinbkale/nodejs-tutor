//require('express')().listen(3000);
var exp = require('express');
var app = exp();

//Middleware to make a folder public to serve static content
app.use(exp.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send("Hello Express");    
});

//REST URL
app.get('/players/:name/:lang', function(req, res){
    res.write("name="+ req.params.name);
    res.end(" lang="+ req.params.lang); 
});

app.get('/players', function(req, res){
    var query = req.query;
    console.log("query value :" + JSON.stringify(query));
    res.write("name="+ query.name);
    res.end(" lang="+ query.lang);
    //res.send(JSON.stringify(query));
});
var port = process.env.PORT || 3000; 
app.listen(port, function(){
    console.log("This Server is running on port :" + port);
});
