// Modules =================================
import * as express from 'express';
import { LookupController } from './controllers';

const app: express.Application = express();
app.use('/lookup', LookupController);

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const pug = require('pug');
const path = require('path');
// app.engine('html', require('pug').renderFile);
app.set('view engine', 'pug'); // For using Pug: https://pugjs.org/api/getting-started.html
app.set("views", path.join(__dirname, '/public/'));

// Configuration ===========================

const PORT: number = process.env.PORT || 27017;
const db = require('./config/db');

// Parse application/json
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Set static files location
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public'));

// Require routes and catch-all redirect to index.html
require('./app/routes')(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

exports = module.exports = app;
