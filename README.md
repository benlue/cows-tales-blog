A Blog App In The Tales Theme
-----------------------------

## Install & Run
You can install the website using npm:

    npm install csws-tales-blog
    
Once the package is installed, you can change to the install directory and type:

    node startWeb
    
That will start the website. You can point your browser to http://127.0.0.1:8080 to see the results.

## Deploy To Heroku
The demo website is ready for Heroku deployment right out of the box. There are only two minor changes you have to make.
First of all, change the port setting in the [startWeb.js](https://github.com/benlue/cows-onePage/blob/master/startWeb.js) file (line #9) to "process.env.PORT" (see the sample code below).

    var  serverConfig = {
            "apiEngine": {
                "host": "coimapi.tw",
                "port": 80,
                "method": "POST"
            },
            "server": {
                "wwwPath": __dirname,
                "port": process.env.PORT,
                "maxSockets": 200
            }
         },
         coServ = require('coserv');

    coServ.init(serverConfig);
    coServ.restart();

You'll also need to assign the domain name of your Heroku machine to the demo website. Replace "127.0.0.1" with your Heroku domain in the [sites.json](https://github.com/benlue/cows-onePage/blob/master/sites.json) file.

Now you can push the whole website to Heroku using 'git push heroku master' and that's it. Your website is now available to the world.

## Credits
The web theme of this blog is generously offered for free by [HackerThemes.com](http://hackerthemes.com/). Please keep the link back to [HackerThemes.com](http://hackerthemes.com/) if possible, as a thank you to its creator.