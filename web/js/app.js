/** 
 * Welcome to the JavaScript workshop!
 *
 * Lets start writing some JS code in here to control our dashboard :)
 *
 */

//Make a connection to the server
var socket = io.connect('http://localhost:3030');

//Create a new connection to our meerkobo client
var client = new meerkovoClient(socket);

//
client.onServersDown(function(data){
	var element = document.getElementById("meerkat-zoo-data");
	element.innerHTML= data.data.toFixed(0);
});