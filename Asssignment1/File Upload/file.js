var express=require('express');
var hbs=require('express-handlebars');
var path=require('path');
var bodyparser=require('body-parser');
var app=express();
var multer=require('multer');

var urlencod=bodyparser.urlencoded({extended:false});
app.use(bodyparser.json());

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars',hbs({defaultLayout:'main'}));
app.set('view engine','handlebars');


app.get('/',(req,res)=>{
	res.render('f1');
})

var storage=multer.diskStorage({
destination:function(req,file,cb)
{
	cb(null,'./image');
},
filename:function(req,file,cb)
{
	cb(null,file.originalname);
}
});

var up=multer({
	storage:storage
});

app.post('/',urlencod,up.single('abc'),(req,res)=>{
	// var file = req.file;
	// if(!file)
	// {
	// 	var error = new Error("Please Upload File");
	// 	error.httpStatusCode = 400;
	// 	return next(error);
	// }
	res.send('hey');
	});

app.listen(3333);
