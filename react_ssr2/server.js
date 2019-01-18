const express = require('express');
const next = require('next');
const config = require('./config');

const dev = config.nodeEnv;

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
       
        const server = express();

        server.get('/page2', (request, response) => {
            app.render(request, response, '/page2');
        })

        server.get('/page3', (request, response) => {
            app.render(request, response, '/ohyeah');
        })

        server.get("*", (request, response) => {
            return handle(request, response)
        });

        server.listen(config.port, (err) => {
            if (err) throw err;
            console.log(`Ready at ${config.serverUrl}`);
        });

    });