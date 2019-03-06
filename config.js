
var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws", // Where deployed?
        reconnect: true
    },
    identity: {
        username: "Matthew Harrilal",
        password: "oauth:hqlbx099u269myf0rx029ijtyj1lp5" // Have to receive from tmi
    },
    channels: ["jagermeiste11691"]
};

export default options;