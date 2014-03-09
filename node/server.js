var express = require("express");
var randomNumberGenerator = require('./randomNumberGenerator.js');
var meerkovo = require("./meerkovo.js");
var datasource = new meerkovo(new randomNumberGenerator(1,50));
var app = express();

var actionMap= {
    "meerkats-awake": datasource.numberOfMeerkatsAwake,
    "meerkats-asleep": datasource.numberOfMeerkatsAsleep,
    "meerkat-waste":  datasource.wasteProduced,
    "daylight-hours":  datasource.daylightHours,
    "food-consumed":  datasource.foodConsumed,
    "servers-down":  datasource.serversDown,
}

app.get('/api/:action/:unitOfTime',function(req, res){
   var action = req.params.action;
   var unitOfTime = req.params.unitOfTime;
   var handleAction= actionMap[action];
   if(handleAction)
   {
       var message = {"unitOfTime": unitOfTime,
                      "value": handleAction()}; 
       res.send(message);
   }
   res.send('Do not know how to handle '+action,500);
});
console.log("listening for connections on 3030");
app.listen(3030);
