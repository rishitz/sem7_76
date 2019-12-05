var express = require('express');
var session=require('express-session')
var hbs=require('express-handlebars');
var bodyparser=require('body-parser');
const { check, validationResult } = require('express-validator');
const { matchedData,sanitizeBody } = require('express-validator');

var path=require('path');
var app=express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'hey'}));

 var json=bodyparser.json();
var urlencodedParser=bodyparser.urlencoded({extended:false});

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars',hbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

/* GET home page. */ 
app.get('/', function(req, res) {
  if(req.session.email)
  {
    res.render('login1');
  }else
  {
     res.render('home');
  }
 
  });
app.post('/',urlencodedParser,[
  check('email','Invalid Email').isEmail(),
  check('ps','Must be in 5 Character').isLength({min:2}),
  check('cp').custom((value,{req})=>{
if(value!=req.body.ps){
  throw new Error('Password Does Not Match..');
}
return true;
  })
  ],function(req,res){
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
       const user=matchedData(req);
       res.render('home',{error:errors.mapped(),user:user});
     }else{
      const user=matchedData(req);
      req.session.email=req.body.email;
      console.log(req.session.email);
      res.render('login1',{title:'User-Details',user:user});
     }
  
  });

app.listen(3000);