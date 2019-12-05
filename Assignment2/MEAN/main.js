var express=require('express');
var mongoose=require('mongoose');
var cors=require('cors');
var path=require('path');
var app=express();
app.use(cors());


var bodyparser=require('body-parser');
var urlencod=bodyparser.urlencoded({extended:false});
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/emp',{useNewUrlParser:true});
var db=mongoose.connection;

db.once('open',function(){
console.log("suc");

var ss=mongoose.Schema({
    uname:String,
    city:String,
    pass:String
});

var sm=mongoose.model('user',ss,'tblemp');

app.get('/show',(req,res)=>{
    sm.find(function(err,data){
        if(err) throw err;
        else res.send(data);
    });
});

app.post('/submit',urlencod,(req,res)=>{
    var s1=new sm({
        uname:req.body.uname,
        city:req.body.city,
        pass:req.body.pass
    });
    s1.save(function(err,data){
        if(err) throw err;
        else console.log("ins");
    });
});

app.delete('/delete/:id',(req,res)=>{
    sm.deleteOne({_id:req.params.id},function(err,data){
        if(err) throw er;
        else console.log('del');
    });
});
app.get('/edit/:id',(req,res)=>
{
   sm.findOne({_id:req.params.id},function(err,data)
   {
       if(err) throw err;
       else res.send(data);
   });
});

app.put('/update/:id',urlencod,(req,res)=>{
    sm.updateOne({_id:req.params.id},{
        uname:req.body.uname,
        city:req.body.city,
        pass:req.body.pass
    },function(err,data){
        if(err) throw err;
        else console.log("up");
    });
});
});


app.listen(3000);
