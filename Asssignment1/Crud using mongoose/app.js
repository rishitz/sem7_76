var express = require('express');
var session=require('express-session')
var hbs=require('express-handlebars');
var bodyparser=require('body-parser');
var mongoose = require('mongoose');
var multer=require('multer');
var path=require('path');
 mongoose.connect('mongodb://localhost:27017/student',{useNewUrlParser: true});
 var con = mongoose.connection;

var path=require('path');
var app=express();
//app.use(express.static(path.join(__dirname, 'public')));

 var json=bodyparser.json();
var urlencodedParser=bodyparser.urlencoded({extended:false});

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars',hbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

  var studentSchema = new mongoose.Schema({
    name:  String,
    marks: Number,
    gender: String
});

 var studentmodel = mongoose.model('user', studentSchema);
  
 app.get('/',function(req,res){
res.render('emp',{title:'student Form'});
 });

 app.post('/',urlencodedParser,function(req,res)
 {
 new studentmodel({
 	name:req.body.nm,
 	marks:req.body.ms,
 	gender:req.body.gn
 }).save(function(err,doc){
 	if(err) throw err;
 	res.redirect("view");
 })
 });

 app.get('/view',(req,res)=>{
studentmodel.find({},function(err,docs){
if(err) throw err;
else res.render('h1',{user:docs});
});
 });

 app.get('/delete/:id',function(req,res){
var id=req.params.id;
var del=studentmodel.findByIdAndDelete(id);
del.exec(function(err){
	if(err) throw err;
	res.redirect("/view");
});
 });

 app.get('/edit/:id',function(req,res){
var id=req.params.id;
var edit=studentmodel.findById(id);
edit.exec(function(err,data){
	if(err) throw err;
	res.render('edit',{title:'EditStudent',records:data});
});
 });

app.post('/update/',urlencodedParser,function(req,res){

var update=studentmodel.findByIdAndUpdate(req.body.id,{
	name:req.body.nm,
 	marks:req.body.ms,
 	gender:req.body.gn
});
update.exec(function(err,data){
	if(err) throw err;
	res.redirect('/view');
});
 });






app.listen(3000);