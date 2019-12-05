const passport = require('passport');
var User = require('./db/User');
//const bcrypt = require("bcryptjs");

const LocalStrategy = require('passport-local').Strategy;

/**
 * Called when user is added into the session.
 * 
 * It stores only the unique id of the user into the session.
 * 
 */
module.exports=function(passport){
    passport.serializeUser(function(user,done){
        done(null,user)
    })
    passport.deserializeUser(function(user,done){
           done(null,user)
    })
    passport.use(new LocalStrategy(function(username,password,done){
        User.findOne({username:username},function(err,doc){
            if(err)
            {
                done(err);
            }else{
                if(doc){
                    var valid=doc.comparePassword(password,doc.password);
                    if(valid){
                        done(null,{
                            username:doc.username,
                            password:doc.password
                        })
                    }else{
                        done(null,false)
                    }

                }else
                {
                    done(null,false)
                }
            }
        })
    }))
}


/**
 * Passport Local Strategey
 * 
 * 'passReqToCallback' is set to true to access req object and to set some flash messages
 * in case of any errors.
 */



