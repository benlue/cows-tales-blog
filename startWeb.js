var  serverConfig = {
        "apiEngine": {
            "host": "coimapi.tw",
            "port": 80,
            "method": "POST"
        },
        "server": {
            "wwwPath": __dirname,
            "port": 8080, //process.env.PORT,
            "maxSockets": 200
        }
     },
     coServ = require('coserv');

coServ.init(serverConfig);
coServ.restart();