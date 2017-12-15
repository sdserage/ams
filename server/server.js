require('dotenv').config();
const express       = require('express')
    , session       = require('express-session')
    , bodyParser    = require('body-parser')
    , massive       = require('massive')
    //, passport      = require('passport')
    //, Auth0Strategy = require('passport-auth0')
    , cors          = require('cors')
    , auth          = require('./auth')
    , inquiries     = require('./inquiries');
/* Set Port */
const PORT = process.env.PORT || 3010
/* Create express app */
const app = express();
/* Middleware */
// cors
app.use(cors());
// body-parser
app.use(bodyParser.json());
// session config
app.use(session({                 // Step one
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// massive
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    console.log('Massive initialized')
});

auth(app);
inquiries(app);
