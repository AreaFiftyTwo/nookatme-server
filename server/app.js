const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

const PORT = process.env.PORT || 8080;

module.exports = app;

const { db, User } = require('./db/index');
const dbStore = new MongoStore({ mongooseConnection: db });

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const createApp = () => {
  // Logging middleware //
  app.use(morgan('dev'));
  // Body-parsing middleware //
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'insecure secret',
    store: dbStore,
    resave: false,
    saveUninitialized: false
  }))

  app.use(passport.initialize());
  app.use(passport.session());
  // Static file serving middleware. Uncomment this when ready. //
  // app.use(express.static(path.join(__dirname, '..', 'public')));

  // Sends our index.html. Uncomment when ready. //
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../public/index.html'));
  // });

  // Initialize passport //

  app.get('/', (req, res, next) => {
    res.status(200).json({
      message: '<--- Welcome to the NookAtMe database API! --->'
    })
  })

  // API routes //
  app.use('/api', require('./api'));

  // Auth Routes //
  app.use('/auth', require('./auth'));

  // Error handling middleware //
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  // Start listening (and create a 'server' object representing our server)
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
};

async function bootApp() {
  await createApp();
  await startListening();
}

bootApp();
