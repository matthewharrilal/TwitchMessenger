const options = require("./config.js")
var tmi = require("tmi.js")

console.log("OPTIONS -> " + JSON.stringify(options))
var client = new tmi.client(options)
client.connect() // Makes server able to be connected to

client.on("connected", function(address, port ) { // When a specific user connects
    console.log("Connected address " + address)
    console.log("Connected Port  " + port)
    client.action("SineSapien", "I am not actually talking to you through the twitch chat but through a bot that I have made")
});