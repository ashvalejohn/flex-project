const bCrypt = require('bcrypt-nodejs');


module.exports = (passport, User) => {

  // const User = user;
  const LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });


  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      const generateHash = (pw) => {
        return bCrypt.hashSync(pw, bCrypt.genSaltSync(8));
      };

      User.findOne({
        where: {
          email: email
        }
      }).then((foundUser) => {
        if (foundUser) {
          return done(null, false, { message: 'That email is already taken' });
        } else {
          const userPassword = generateHash(password);
          const data = {
            email,
            password: userPassword,
            name: req.body.name,
            dosage: parseInt(req.body.dosage)
          };

          User.create(data).then((newUser, created) => {
            if (!newUser) {
              return done(null, false);
            } else {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));

};
