require('dotenv').config();
const passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , strategy = new Auth0Strategy({ // Set strategy
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
      },
      function(accessToken, refreshToken,extraParams, profile, done){
        return done(null, profile)
      //   //console.log(profile);
      //   //return done(null, profile); // will need to be edited
      //   const db = app.get('db'); // Sets the db to a variable
      //   //console.log('Profile object:\n\n',profile); // Uncomment to test profile object
      //   db.find_user_by_authid([profile._json.user_id])
      //     .then(user=>{
      //       if(user[0]){
      //         return done(null, user[0].userid);
      //       }else{
      //         const user = profile._json; // Sets the profile json object to a variable
      //         db.create_user([
      //           user.name,
      //           user.email,
      //           user.user_id
      //         ]).then(user=>{
      //           return done(null, user[0].userid);
      //         });
      //       }
      //     })
      //   .catch(err=> console.log('There was a problem:\n\n', err));
      // }
    });

module.exports = function auth(app){
  passport.use(strategy);
  passport.serializeUser((id, done)=>{
    done(null, id); // EDIT THIS?
  });
  passport.deserializeUser((id, done)=>{
    app.get('db').find_user_by_userid([id])
      .then(user=>{
        return done(null, user[0]);
      });
  });
  app.use(passport.initialize());  // Step two
  app.use(passport.session());      // Step three
}
