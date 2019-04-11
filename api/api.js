const express  = require('express');
const morgan   = require('morgan');
const parser   = require('body-parser');
const cors     = require('cors');

const public   = require('./utility/paths').public;
const config   = require('./config/server.config');
const routes   = require('./routes');
const api      = express();

api.use(parser.urlencoded({extended : true})).use(parser.json())
   .use(express.static(public))
   .use(morgan(config.env))
   .use(cors())
   .use('/', routes);

api.listen(config.port, () => console.log(`Exposito API is running @ port \x1b[36m${config.port}\x1b[37m.`))