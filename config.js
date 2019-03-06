
var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws", // Where deployed?
        reconnect: true
    },
    identity: {
        username: "TestChatBot", // Cant have spaces
        password: "oauth:i52q4sghr5edsa9j9cr0ccq15twlwm" // Have to receive from tmi
    },
    channels: ["jagermeiste11691"]
};

module.exports = options;