const express = require('express');
const next = require('next');

const dev = true
const app = next({ dev })
const routes = require('./routes')
const handle = routes.getRequestHandler(app)

app.prepare()
    .then(() => {
        const server = express()

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('ready on localhost http://localhost:3000')
        })
    })
    .catch((err) => {
        console.error(err.stack)
        process.exit(1)
    })