const options = require("./config.js")
var tmi = require("tmi.js")


var client = new tmi.client(options)
client.connect() // Makes server able to be connected to

client.on("connected", function(address, port ) { // When a specific user connects
    console.log("Connected address " + address)
    console.log("Connected Port  " + port)
    client.action("jagermeiste11691", "Hello there, how are you?")
});